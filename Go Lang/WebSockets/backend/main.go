package main

import (
	"fmt"
	"net/http"
	"github.com/gobwas/ws"
	"github.com/gobwas/ws/wsutil"
)

func main() {
	http.ListenAndServe(":8080", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		conn, _, _, err := ws.UpgradeHTTP(r, w)
		if err != nil {
			// handle error
			fmt.Println(err)
		}
		go func() {
			defer conn.Close()

			for {
				msg, op, err := wsutil.ReadClientData(conn)
				if err != nil {
					// handle error
					fmt.Println(err)
				}
				err = wsutil.WriteServerMessage(conn, op, msg)
				if err != nil {
					// handle error
					fmt.Println(err)
				}
			}
		}()
	}))
}