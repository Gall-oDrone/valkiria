package routes

import (
	"net/http"

	"../../controllers"
)

var postsRoutes = []Route{
	Route{
		URI:          "/api/posts",
		Method:       http.MethodGet,
		Handler:      controllers.GetPosts,
		AuthRequired: false,
	},
	Route{
		URI:          "/api/posts",
		Method:       http.MethodPost,
		Handler:      controllers.CreatePost,
		AuthRequired: true,
	},
	Route{
		URI:          "/api/posts/{id}",
		Method:       http.MethodGet,
		Handler:      controllers.GetPost,
		AuthRequired: false,
	},
	Route{
		URI:          "/api/posts/{id}",
		Method:       http.MethodPut,
		Handler:      controllers.UpdatePost,
		AuthRequired: true,
	},
	Route{
		URI:          "/api/posts/{id}",
		Method:       http.MethodDelete,
		Handler:      controllers.DeletePost,
		AuthRequired: true,
	},
}
