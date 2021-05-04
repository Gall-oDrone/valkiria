package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"../auth"

	"../models"
	"../responses"
)

// SignUp method
func SignUp(w http.ResponseWriter, r *http.Request) {
	user := models.User{}
	err := json.NewDecoder(r.Body).Decode(&user)

	if err != nil {
		fmt.Println("Error at Decoding Sign Up:", err)
		responses.ERROR(w, http.StatusUnprocessableEntity, err)
		return
	}

	user.Prepare()
	err = user.Validate("signup")
	if err != nil {
		fmt.Println("Error at Validating: ", err)
		responses.ERROR(w, http.StatusUnprocessableEntity, err)
		return
	}

	token, err := auth.SignIn(user.Email, user.Password)
	if err != nil {
		responses.ERROR(w, http.StatusUnprocessableEntity, err)
		return
	}
	responses.JSON(w, http.StatusOK, token)
}
