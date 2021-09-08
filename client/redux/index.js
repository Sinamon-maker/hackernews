import { createStore, applyMiddleware, compose } from "redux"
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
//import { io } from "socket.io-client";
import thunk from 'redux-thunk'
import createRootReducer from './reducers'

import history from './history'

const middleware = [thunk, routerMiddleware(history)]
const initialState = {}

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose
const composedEnchanters = composeFunc(applyMiddleware(...middleware))
const store = createStore(createRootReducer(history), initialState, composedEnchanters)


// const socket = io('/');

// socket.on("connect", () => {

//console.log("hi",);


//});

//socket.on('action', function (data) {
// console.log('connected');
// store.dispatch(data)
//})

//export function getSocket() {
//  return socket
//}

export default store