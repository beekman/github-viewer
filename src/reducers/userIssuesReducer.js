import { FETCH_ISSUES_LOADING, FETCH_ISSUES } from '../actions/issuesActions';

const initialState = {
  loading: true,
  issues: []
};

export default function issueReducer(state = initialState, action){
  switch(action.type){
    case FETCH_ISSUES_LOADING:
      return { ...state, loading: true };
    case FETCH_ISSUES:
      return { ...state, loading: false, repos: action.payload };
    default:
      return state;
  }
}
