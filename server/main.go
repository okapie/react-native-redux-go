package main

import (
    "encoding/json"
    "log"
    "net/http"
    "database/sql"

    "github.com/gorilla/mux"
    "github.com/gorilla/handlers"
    _ "github.com/go-sql-driver/mysql"
)

type Todo struct {
    Item    string `json:"item"`
}

type Todos []Todo

func getTodoList(w http.ResponseWriter, r *http.Request) {
    db, err := sql.Open("mysql", "root:root@/db_todos")
    if err != nil {
        panic(err.Error())
    }

    defer db.Close()

    rows, err := db.Query("select item from tb_todos")
    if err != nil {
        panic(err.Error())
    }

    var todos []Todo

    for rows.Next() {
        var item string

        rows.Scan(&item)
        todos = append(todos, Todo{ item })
    }

    todosBytes, _ := json.Marshal(&todos)

    w.Write(todosBytes)
    db.Close()
}

func main() {
    allowedOrigins := handlers.AllowedOrigins([]string{"http://localhost:8081"})
    allowedMethods := handlers.AllowedMethods([]string{"GET", "POST", "DELETE", "PUT"})
    allowedHeaders := handlers.AllowedHeaders([]string{"Authorization"})

    r := mux.NewRouter()
    r.HandleFunc("/api/v1/todos", getTodoList).Methods("GET")

    log.Fatal(http.ListenAndServe(":8000", handlers.CORS(allowedOrigins, allowedMethods, allowedHeaders)(r)))
}
