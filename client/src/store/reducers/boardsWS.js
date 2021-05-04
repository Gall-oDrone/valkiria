import { 
  SET_BOARD_ORDER,
  SET_CARD_ORDER,
  SET_CARD_DETAILS,
  SET_LASTVIEWED
} from "../actions/actionTypes";

import { updateObject } from "../utility";

const initialState = {
  messages: [],
  chats: [],
  last_viewed: null,
  status: null
};

const addMessage = (state, action) => {
  return updateObject(state, {
    messages: [...state.messages, action.message]
  });
};

const setMessages = (state, action) => {
  console.log("OH T OH T at redu setMessages: ", action.messages.reverse())
  return updateObject(state, {
    messages: action.messages
  });
};

const addMSGS = (state, action) => {
  return updateObject(state, {
    messages: [...state.messages, action.message]
  });
};

const setLVBaords = (state, action) => {
  console.log("OH T OH T at redu setLVBaords: ", action)
  return updateObject(state, {
    last_viewed: action.lvb
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOARD_ORDER:
      return addMessage(state, action);
    case SET_CARD_ORDER:
      return setMessages(state, action);    
    case SET_CARD_DETAILS:
      return addMSGS(state, action);
    case SET_LASTVIEWED:
      return setLVBaords(state, action);
    default:
      return state;
  }
};

export default reducer;
