import { FETCH_USER_INFO, FETCH_USER_INFO_LOADING, FETCH_USER_REPOS, FETCH_REPO_PULL_REQUESTS, FETCH_USER_ISSUES } from '../actions/userActions';

const initialState = {
  loading: true,
  details: null,
  repos: null,
  issues: null,
  pullrequests: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USER_INFO_LOADING:
      return { ...state, loading: true };
    case FETCH_USER_INFO:
      return { ...state, loading: false, details: action.payload };
    case FETCH_USER_REPOS:
      return { ...state, loading: false, repos: action.payload };
    case FETCH_REPO_PULL_REQUESTS:
      return { ...state, loading: false, pullrequests: action.payload };
    case FETCH_USER_ISSUES:
      return { ...state, loading: false, issues: action.payload };
    default:
      return state;
  }
}
