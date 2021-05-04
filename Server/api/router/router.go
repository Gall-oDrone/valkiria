package router

import (
	"log"
	"net/http"

	"./routes"

	"github.com/gorilla/mux"
	"github.com/gorilla/websocket"
)

// New routes
func New() *mux.Router {
	r := mux.NewRouter().StrictSlash(true)
	return routes.SetupRoutesWithMiddlewares(r)
}

// Websockets
var upgrader = websocket.Upgrader{}
var connections []*websocket.Conn

func reverse(w http.ResponseWriter, r *http.Request) {
	ws, _ := upgrader.Upgrade(w, r, nil)
	defer ws.Close()

	for {
		// Receive message
		mt, message, _ := ws.ReadMessage()
		log.Printf("Message received: %s", message)

		// Reverse message
		n := len(message)
		for i := 0; i < n/2; i++ {
			message[i], message[n-1-i] = message[n-1-i], message[i]
		}

		// Response message
		_ = ws.WriteMessage(mt, message)
		log.Printf("Message sent: %s", message)
	}
}

func broadcastMessage(msg []byte, connections []*websocket.Conn) {
	// Reverse message
	n := len(msg)
	for i := 0; i < n/2; i++ {
		msg[i], msg[n-1-i] = msg[n-1-i], msg[i]
	}

	for _, conn := range connections {
		_ = conn.WriteMessage(websocket.TextMessage, msg)
	}
}
