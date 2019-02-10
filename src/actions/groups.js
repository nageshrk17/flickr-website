import {
  FETCH_GROUPS_REQUEST,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_FAILURE,
  FETCH_GALLERY_REQUEST,
  FETCH_GALLERY_SUCCESS,
  FETCH_GALLERY_FAILURE,
} from '../constants/ActionTypes';


export const fetchGroups = value => {
  return (dispatch) => {
    dispatch({
      type: FETCH_GROUPS_REQUEST,
    })
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

export const fetchGallery = id => {
  return (dispatch) => {
    dispatch({
      type: FETCH_GALLERY_REQUEST,
    })
    const URL = `https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=ff721352982d7a2b9e7133b6377dab29&group_id=${id}&format=json&nojsoncallback=1`;
    return fetch(URL, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: FETCH_GALLERY_SUCCESS,
          photos: json.photos,
        })
      })
      .catch(error => {
        console.log('fetchQuestions  error - ', error)
        dispatch({
          type: FETCH_GALLERY_FAILURE,
          error: error,
        })
      })
  }
}


