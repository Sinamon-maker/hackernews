import axios from 'axios'
//import { getSocket } from '../index'


export const RECEIVE_LIST = 'RECEIVE_LIST'
export const RECEIVE_STORY = 'RECEIVE_STORY'


const initialState = {
  listNews: [],
  story: []

}

export default (state = initialState, action) => {
  switch (action.type) {

    case RECEIVE_LIST: {
      return {
        ...state,
        listNews: [...action.news]
      }
    }
    case RECEIVE_STORY: {
      return {
        ...state,
        story: {
          ...state.story,
          [action.id]: action.news
        }

      }
    }

    default:
      return state
  }

}

export function updateCode(code) {
  return { type: UPDATE_CODE, code }
}

const URL2 = (it) => `https://hacker-news.firebaseio.com/v0/item/${it}.json?print=pretty`


export function getItemsIds() {
  return (dispatch) => {
    return axios.get('/api/v1/news').then(result => {
      dispatch({
        type: RECEIVE_LIST,

        news: result.data
      })
    })
  }
}

export function getComment(id) {
  return axios.get(`/api/v1/${id}`)
}

export function getItem(id) {
  return (dispatch) => {
    return axios.get(`/api/v1/${id}`).then(result => {
      dispatch({
        type: RECEIVE_STORY,

        news: result.data, id
      })
    })
  }
}

//export function getItem(id) {
  //return axios.get(URL2(id))
//}
