package main

import (
	"fmt"
	"net/http"
	"github.com/Shaviaditya/golang-task/backend/routes"
)

func main(){
	routes.RouterModule()
	fmt.Println("Broadcaster Service")
	err := http.ListenAndServe(":8080",nil)

	if err!=nil {
		fmt.Printf("\nServer Error : %v",err)
	}
}