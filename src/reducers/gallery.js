import {
    FETCH_GALLERY_REQUEST,
    FETCH_GALLERY_SUCCESS,
    FETCH_GALLERY_FAILURE,
  } from '../constants/ActionTypes'
  
  const INITIAL_STATE = {
    items: [],
    isLoading: false,
    error: null,
  }
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_GALLERY_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case FETCH_GALLERY_SUCCESS:
        return {
          ...state,
          isLoading: false,
          items: action.photos.photo,
        };
      case FETCH_GALLERY_FAILURE: 
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };
      default:
        return state;
    }
  }
  