import { getGithubUserInfo } from '../services/mocks/githubApi';
export const FETCH_USER_INFO = 'FETCH_USER_INFO';
export const FETCH_USER_INFO_LOADING = 'FETCH_USER_INFO_LOADING';
export const FETCH_REPOS = 'FETCH_ALL_REPOS';
export const FETCH_PULL_REQUESTS = 'FETCH_PULL_REQUESTS';
export const FETCH_ISSUES = 'FETCH_ISSUES';

export const fetchGithubUserInfo = username => dispatch => {
  dispatch({ type: FETCH_USER_INFO_LOADING });
  return getGithubUserInfo(username)
    .then(details => {
      dispatch({
        type: FETCH_USER_INFO,
        payload: details
      });
    });
};
