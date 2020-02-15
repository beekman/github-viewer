import { FETCH_USER_INFO, FETCH_USER_INFO_LOADING } from '../actions/userActions';

const initialState = {
  loading: true,
  details: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USER_INFO_LOADING:
      return { ...state, loading: true };
    case FETCH_USER_INFO:
      return { ...state, loading: false, details: action.payload };
    default:
      return state;
  }
}
