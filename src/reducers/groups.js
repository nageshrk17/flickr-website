import {
  FETCH_GROUPS_REQUEST,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_FAILURE,
} from '../constants/ActionTypes'

const INITIAL_STATE = {
  items: [],
  isLoading: false,
  error: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_GROUPS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_GROUPS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.groups.group,
      };
    case FETCH_GROUPS_FAILURE: 
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
