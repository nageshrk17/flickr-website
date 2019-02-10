import {
  FETCH_GROUPS_REQUEST,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_FAILURE,
} from '../constants/ActionTypes';


export const fetchGroups = value => {
  return (dispatch) => {
    dispatch({
      type: FETCH_GROUPS_REQUEST,
    })
    console.log(value);
    const URL = `https://api.flickr.com/services/rest/?method=flickr.groups.search&api_key=4f6cfbe2d265d0a9e3f45e085d65bdf4&text=${value}&format=json&nojsoncallback=1`;
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

