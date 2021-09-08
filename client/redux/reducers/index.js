import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import news from './news'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  news
})

export default createRootReducer