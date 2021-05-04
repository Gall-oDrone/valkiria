package database

import (

	// mysql is driver

	"../../config"
	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
	_ "github.com/lib/pq"
	_ "gorm.io/driver/postgres"
)

var db *gorm.DB

// Connect to the DATABASE
func Connect() (*gorm.DB, error) {
	// db, err := sql.Open("postgres", config.DBURL_POSTGRES)
	// if err != nil {
	// 	return nil, err
	// }
	db, err := gorm.Open(config.DBDRIVER, config.DBURL)

	// db2, err2 := gorm.Open(config.DB_DRIVER_2, config.DBURL_PSQL)
	//gorm.Open("postgres", "host=localhost port=5432 user=postgres dbname=posgo password=gallo sslmode=disable")

	if err != nil {
		return nil, err
	}
	return db, nil
}
