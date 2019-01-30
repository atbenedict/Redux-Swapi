import {
  FETCH_CHAR_START,
  FETCH_CHAR_SUCCESS,
  FETCH_CHAR_FAILURE
} from "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAR_START:
      return { ...state, error: null, isFetching: true };
    case FETCH_CHAR_SUCCESS:
      return {
        ...state,
        characters: [action.payload.data],
        error: null,
        isFetching: false
      };
    case FETCH_CHAR_FAILURE:
      return { ...state, error: action.payload.err, isFetching: false };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
