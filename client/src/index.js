import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from "./registerServiceWorker";
import './index.css';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import App from './App';
import reportWebVitals from './reportWebVitals';
import authReducer from "./store/reducers/auth";
const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
})
const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)));
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
