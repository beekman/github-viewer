import { getIssues } from '../services/getIssues';

export const FETCH_ISSUES_LOADING = 'FETCH_ISSUES_LOADING';
export const FETCH_ISSUES = 'FETCH_ISSUES';

export const fetchIssues = repo => dispatch => {
  dispatch({ type: FETCH_ISSUES_LOADING });

  return getIssues(repo)
    .then(details => {
      dispatch({
        type: FETCH_ISSUES,
        payload: details
      });
    });
};
