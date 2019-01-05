package main

import (
    "encoding/json"
    "log"
    "net/http"
    "database/sql"
    "io/ioutil"

    "github.com/gorilla/mux"
    "github.com/gorilla/handlers"
    _ "github.com/go-sql-driver/mysql"
)

type Todo struct {
    Id      int    `json:"id"`
    Item    string `json:"item"`
}

type Todos []Todo

func openDB() (db *sql.DB) {
    dbDriver := "mysql"
    dbUser := "root"
    dbPassword := "root"
    dbName := "db_todos"
    db, err := sql.Open(dbDriver, dbUser+":"+dbPassword+"@/"+dbName)
    if err != nil {
        panic(err.Error())
    }
    return db
}

func getTodoList(w http.ResponseWriter, r *http.Request) {
    db := openDB()
    records, err := db.Query("SELECT * FROM Tb_Todos ORDER BY id DESC")
    if err != nil {
        panic(err.Error())
    }
    var todos []Todo
    for records.Next() {

        var id int
        var item string

        records.Scan(&id ,&item)
        todos = append(todos, Todo{ id, item })
    }
    todosBytes, _ := json.Marshal(&todos)

    w.Write(todosBytes)
    defer db.Close()
}

func postTodo(w http.ResponseWriter, r *http.Request) {
    defer r.Body.Close()
    body, err := ioutil.ReadAll(r.Body)
    if err != nil {
        log.Fatal(err)
    }

    db := openDB()
    item := string(body)
    record, err := db.Prepare("INSERT INTO Tb_Todos(item) VALUES(?)")
    if err != nil {
        panic(err.Error())
    }
    record.Exec(item)
    log.Println("INSERT Item: " + item)

    defer db.Close()
    http.Redirect(w, r, "/", 200)
}

func deleteTodo(w http.ResponseWriter, r *http.Request) {
    db := openDB()
    item := r.URL.Query().Get("id")
    record, err := db.Prepare("DELETE FROM Tb_Todos WHERE id=?")
    if err != nil {
        panic(err.Error())
    }
    record.Exec(item)
    log.Println("DELETE Item: " + item)
    defer db.Close()
    http.Redirect(w, r, "/", 200)
}

func main() {
    allowedOrigins := handlers.AllowedOrigins([]string{"http://localhost:8081"})
    allowedMethods := handlers.AllowedMethods([]string{"GET", "POST", "DELETE", "PUT"})
    allowedHeaders := handlers.AllowedHeaders([]string{"Authorization"})

    r := mux.NewRouter()
    r.HandleFunc("/api/v1/todos", getTodoList).Methods("GET")
    r.HandleFunc("/api/v1/todo", postTodo).Methods("POST")
    r.HandleFunc("/api/v1/todo", deleteTodo).Methods("DELETE")

    log.Fatal(http.ListenAndServe(":8000", handlers.CORS(allowedOrigins, allowedMethods, allowedHeaders)(r)))
}
