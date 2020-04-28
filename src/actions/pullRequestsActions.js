import { getPullRequests } from '../services/getPullRequests';
export const FETCH_PULL_REQUESTS = 'FETCH_PULL_REQUESTS';
export const FETCH_PULL_REQUESTS_LOADING = 'FETCH_PULL_REQUESTS_LOADING';

export const fetchPullRequests = (repo) => dispatch => {
  dispatch({ type: FETCH_PULL_REQUESTS_LOADING });
  return getPullRequests(repo)
    .then(pulls => dispatch({
      type: FETCH_PULL_REQUESTS,
      payload: pulls
    }));
};
