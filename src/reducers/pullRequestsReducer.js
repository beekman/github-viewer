import { FETCH_PULL_REQUESTS_LOADING, FETCH_PULL_REQUESTS } from '../actions/pullRequestsActions';

const initialState = {
  loading: true,
  prs: []
};

export default function pullRequestReducer(state = initialState, action){
  switch(action.type){
    case FETCH_PULL_REQUESTS_LOADING:
      return { ...state, loading: true };
    case FETCH_PULL_REQUESTS:
      return { ...state, loading: false, repos: action.payload };
    default:
      return state;
  }
}
