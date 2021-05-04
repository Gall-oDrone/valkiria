package api

import (
	"fmt"
	"log"
	"net/http"

	"../auto"
	"../config"
	"./router"
	"github.com/rs/cors"
)

func init() {
	config.Load()
	auto.Load()
}

// Run message
func Run() {
	fmt.Printf("\n\tListening [::]:%d", config.PORT)
	listen(config.PORT)
}

func listen(port int) {
	r := router.New()
	corsWrapper := cors.New(cors.Options{
		AllowedOrigins: []string{"*"},
		AllowedMethods: []string{"GET", "POST"},
		AllowedHeaders: []string{"Content-Type", "Origin", "Accept", "*"},
	}).Handler(r)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", port), corsWrapper))
}
