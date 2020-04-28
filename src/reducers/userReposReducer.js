import { FETCH_REPOS_LOADING, FETCH_REPOS } from '../actions/repoActions';

const initialState = {
  loading: true,
  repos: []
};

export default function repoReducer(state = initialState, action){
  switch(action.type){
    case FETCH_REPOS_LOADING:
      return { ...state, loading: true };
    case FETCH_REPOS:
      return { ...state, loading: false, repos: action.payload };
    default:
      return state;
  }
}
