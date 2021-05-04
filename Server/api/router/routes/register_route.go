package routes

import (
	"net/http"

	"../../controllers"
)

var registerRoutes = []Route{
	Route{
		URI:          "/api/signup",
		Method:       http.MethodPost,
		Handler:      controllers.SignUp,
		AuthRequired: false,
	},
}
