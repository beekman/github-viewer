import { getUserInfo } from '../services/getUserInfo';

export const FETCH_USER_INFO = 'FETCH_USER_INFO';
export const FETCH_USER_INFO_LOADING = 'FETCH_USER_INFO_LOADING';

export const fetchUserInfo = username => dispatch => {
  dispatch({ type: FETCH_USER_INFO_LOADING });
  return getUserInfo(username)
    .then(details => {
      dispatch({
        type: FETCH_USER_INFO,
        payload: details
      });
    });
};
