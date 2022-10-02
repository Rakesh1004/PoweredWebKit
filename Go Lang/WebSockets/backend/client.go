package websockets

import (
	"encoding/json"
	"fmt"
	"github.com/google/uuid"
	"github.com/gorilla/websocket"
)

type ClientType struct {
	ID uuid.UUID
	Reciever bool
	Name string
	Conn *websocket.Conn
	Pool *Pool
}

type nameBody struct {
	Name string `json:"name"`
}
 type msgBody struct {
	Message string `json:"message"`
 }

 func closeConn(client *ClientType)  {
	 client.Pool.Unregister <- client
	 client.Conn.Close()
 }

 func (client *ClientType) Read() {
	 defer closeConn(client)
	 for {
		msgType,p,err := client.Conn.ReadMessage()
		if err!=nil {
			fmt.Printf("\nMessage read not available for user Id : %s",&client.ID)
			continue
		}
		if (client.Reciever) {
			fmt.Println("Reciever can't send messages")
			continue
		}
		
		setName := &nameBody{}
		setMsg := &msgBody{}

		if err := json.Unmarshal(p,&setMsg); err!=nil {
			
		}
	 }
 }

