import { FETCH_USER_INFO, FETCH_USER_INFO_LOADING, FETCH_REPOS, FETCH_PULL_REQUESTS, FETCH_ISSUES } from '../actions/userActions';

const initialState = {
  loading: true,
  list: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USER_INFO_LOADING:
      return { ...state, loading: true };
    case FETCH_USER_INFO:
      return { ...state, loading: false, list: action.payload };
    default:
      return state;
  }
}
