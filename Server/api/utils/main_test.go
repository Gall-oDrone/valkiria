package main_test

import (
	"fmt"
	"log"
	"net/http"

	"./router"
	// "github.com/rs/cors"
)

func main_test() {

	r := router.Router()
	fmt.Println("Starting server on the port 8080...")
	log.Fatal(http.ListenAndServe(":8080", r))

	// corsWrapper := cors.New(cors.Options{
	// 	AllowedMethods: []string{"GET", "POST"},
	// 	AllowedHeaders: []string{"Content-Type", "Origin", "Accept", "*"},
	// })
}

func main_test2() {
	// chain := blockchain.InitBlockChain()

	// chain.AddBlock("First Block after Genesis")
	// chain.AddBlock("Second Block after Genesis")
	// chain.AddBlock("Third Block after Genesis")

	// for _, block := range chain.Blocks {

	// 	fmt.Printf("Previous Hash: %x\n", block.PrevHash)
	// 	fmt.Printf("Data in Block: %s\n", block.Data)
	// 	fmt.Printf("Hash: %x\n", block.Hash)

	// 	pow := blockchain.NewProof(block)
	// 	fmt.Printf("PoW: %s\n", strconv.FormatBool(pow.Validate()))
	// 	fmt.Println()

	// }
}
