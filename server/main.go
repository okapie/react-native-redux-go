package main

import (
    "encoding/json"
    "log"
    "net/http"

    "github.com/gorilla/mux"
    "github.com/gorilla/handlers"
)

type Todo struct {
    Item    string `json:"item"`
}

type Todos []Todo

func getTodoList(w http.ResponseWriter, r *http.Request) {
    todos := Todos{
        Todo{Item: "Go to the office at 9 A.M."},
        Todo{Item: "Go to the hospital at 1 P.M."},
        Todo{Item: "Go shopping at 3 P.M."},
    }

    json.NewEncoder(w).Encode(todos)
}

func main() {
    allowedOrigins := handlers.AllowedOrigins([]string{"http://localhost:8081"})
    allowedMethods := handlers.AllowedMethods([]string{"GET", "POST", "DELETE", "PUT"})
    allowedHeaders := handlers.AllowedHeaders([]string{"Authorization"})

    r := mux.NewRouter()
    r.HandleFunc("/api/v1/todos", getTodoList).Methods("GET")

    log.Fatal(http.ListenAndServe(":8000", handlers.CORS(allowedOrigins, allowedMethods, allowedHeaders)(r)))
}
