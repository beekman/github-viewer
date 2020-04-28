import { getRepos } from '../services/getRepos';

export const FETCH_REPOS = 'FETCH_USER_REPOS';
export const FETCH_REPOS_LOADING = 'FETCH_USER_REPOS_LOADING';

export const fetchRepos = repo => dispatch => {
  dispatch({ type: FETCH_REPOS_LOADING });
  return getRepos(repo)
    .then(repos => dispatch({
      type: FETCH_REPOS,
      payload: repos
    }));
};
