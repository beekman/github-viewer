import { combineReducers } from 'redux';
import user from './userDetailsReducer';
import repos from './userReposReducer';
import pulls from './pullRequestsReducer';
import issues from './userIssuesReducer';

export default combineReducers({
  user,
  repos,
  pulls,
  issues
});
