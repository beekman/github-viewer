import { getGithubUserInfo } from '../services/getGithubUserInfo';
import { getGithubUserRepos } from '../services/getGithubUserRepos';
import { getGithubUserIssues } from '../services/getGithubUserIssues';
import { getGithubRepoPullRequests } from '../services/getGithubRepoPullRequests';

export const FETCH_USER_INFO = 'FETCH_USER_INFO';
export const FETCH_USER_INFO_LOADING = 'FETCH_USER_INFO_LOADING';
export const FETCH_USER_REPOS = 'FETCH_USER_REPOS';
export const FETCH_USER_REPOS_LOADING = 'FETCH_USER_REPOS_LOADING';
export const FETCH_REPO_PULL_REQUESTS = 'FETCH_REPO_PULL_REQUESTS';
export const FETCH_REPO_PULL_REQUESTS_LOADING = 'FETCH_REPO_PULL_REQUESTS_LOADING';
export const FETCH_USER_ISSUES = 'FETCH_USER_ISSUES';
export const FETCH_USER_ISSUES_LOADING = 'FETCH_USER_ISSUES_LOADING';

export const fetchUserInfo = username => dispatch => {
  dispatch({ type: FETCH_USER_INFO_LOADING });
  return getGithubUserInfo(username)
    .then(details => {
      dispatch({
        type: FETCH_USER_INFO,
        payload: details
      });
    });
};

export const fetchUserRepos = username => dispatch => {
  dispatch({ type: FETCH_USER_REPOS_LOADING });
  return getGithubUserRepos(username)
    .then(details => {
      dispatch({
        type: FETCH_USER_REPOS,
        payload: details
      });
    });
};

export const fetchRepoPullRequests = (username, repo) => dispatch => {
  dispatch({ type: FETCH_USER_INFO_LOADING });
  return getGithubRepoPullRequests(username, repo)
    .then(details => {
      dispatch({
        type: FETCH_REPO_PULL_REQUESTS,
        payload: details
      });
    });
};

export const fetchUserIssues = username => dispatch => {
  dispatch({ type: FETCH_USER_INFO_LOADING });
  return getGithubUserIssues(username)
    .then(details => {
      dispatch({
        type: FETCH_USER_ISSUES,
        payload: details
      });
    });
};
