package config

import (
	"fmt"
	"log"
	"os"
	"strconv"

	"github.com/joho/godotenv"
)

// PORT server port
var (
	PORT        = 0
	SECRETKEY   []byte
	DBDRIVER    = ""
	DB_DRIVER_2 = ""
	DBURL       = ""
	DBURL_PSQL  = ""
)

// Load the server PORT
func Load() {
	var err error
	err = godotenv.Load()
	if err != nil {
		log.Fatal("SIGMA", err)
	}
	PORT, err = strconv.Atoi(os.Getenv("API_PORT"))
	if err != nil {
		PORT = 9000
	}
	DBDRIVER = os.Getenv("DB_DRIVER")
	DB_DRIVER_2 = os.Getenv("DB_DRIVER_2")
	DBURL_PSQL = fmt.Sprintf("host=%s port=%s user=%s dbname=%s password=%s sslmode=disable",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_NAME"),
		os.Getenv("DB_PASSWORD"),
	)
	DBURL = fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		os.Getenv("DB_MYSQL_USER"),
		os.Getenv("DB_MYSQL_PASSWORD"),
		os.Getenv("DB_MYSQL_HOST"),
		os.Getenv("DB_MYSQL_PORT"),
		os.Getenv("DB_MYSQL_NAME"),
	)

	SECRETKEY = []byte(os.Getenv("API_SECRET"))
}
