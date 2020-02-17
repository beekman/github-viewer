import { getRepos } from '../services/getRepos';

export const FETCH_USER_REPOS = 'FETCH_USER_REPOS';
export const FETCH_USER_REPOS_LOADING = 'FETCH_USER_REPOS_LOADING';

export const fetchRepos = url => dispatch => {
  dispatch({ type: FETCH_USER_REPOS_LOADING });
  return getRepos(url)
    .then(repos => dispatch({
      type: FETCH_USER_REPOS,
      payload: repos
    }));
};
