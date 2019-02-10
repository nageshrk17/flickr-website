import {
  FETCH_GROUPS_REQUEST,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_FAILURE,
} from '../constants/ActionTypes';

const API_END_POINT = 'https://api.flickr.com/services/rest/?method=flickr.groups.search&api_key=4f6cfbe2d265d0a9e3f45e085d65bdf4&text=nature&format=json&nojsoncallback=1'

export const fetchGroups = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_GROUPS_REQUEST,
    })
    const URL = `${API_END_POINT}`;
    return fetch(URL, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: FETCH_GROUPS_SUCCESS,
          groups: json.groups,
        })
      })
      .catch(error => {
        console.log('fetchQuestions  error - ', error)
        dispatch({
          type: FETCH_GROUPS_FAILURE,
          error: error,
        })
      })
  }
}

