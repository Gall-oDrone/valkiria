import axios from "axios";
import { 
  SET_BOARD_ORDER,
  SET_CARD_ORDER,
  SET_CARD_DETAILS,
  SET_LASTVIEWED
} from "./actionTypes";
import { HOST_URL } from "../../settings";

// export const addMessage = message => {
//   return {
//     type: ADD_MESSAGE,
//     message: message
//   };
// };

// export const setMessages = messages => {
//   console.log("OH T OH T at setMessages: ", messages)
//   return {
//     type: SET_MESSAGES,
//     messages: messages
//   };
// };

// export const addMSGS = message => {
//   return {
//     type: ADD_MSGS,
//     message: message
//   };
// };

// export const setMSGS = messages => {
//   console.log("OH T OH T at setMSGS: ", messages)
//   return {
//     type: SET_MSGS,
//     messages: messages
//   };
// };

// export const setStatus = status => {
//   return {
//     type: SET_STATUS,
//     status: status
//   };
// };

// const getUserChatsSuccess = chats => {
//   return {
//     type: GET_CHATS_SUCCESS,
//     chats: chats
//   };
// };

// export const getUserChats = (username, token) => {
//   return dispatch => {
//     axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
//     axios.defaults.xsrfCookieName = "csrftoken";
//     axios.defaults.headers = {
//       "Content-Type": "application/json",
//       Authorization: `Token ${token}`
//     };
//     axios
//       .get(`${HOST_URL}/api/chat/?username=${username}`)
//       .then(res => dispatch(getUserChatsSuccess(res.data)));
//   };
// };

export const setBOrder = messages => {
  console.log("OH T OH T at setBOrder: ", messages)
  return {
    type: SET_BOARD_ORDER,
    messages: messages
  };
};

export const setCOrder = messages => {
  console.log("OH T OH T at setCOrder: ", messages)
  return {
    type: SET_CARD_ORDER,
    messages: messages
  };
};

export const setCDetails = messages => {
  console.log("OH T OH T at setCDetails: ", messages)
  return {
    type: SET_CARD_DETAILS,
    messages: messages
  };
};
export const setLViewed = messages => {
  console.log("OH T OH T at setLViewed: ", messages)
  return {
    type: SET_LASTVIEWED,
    lvb: messages[0]["viewed"]
  };
};