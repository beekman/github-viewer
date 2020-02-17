import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserInfo } from '../../actions/userActions';
import { fetchRepos } from '../../actions/repoActions';
import { fetchIssues } from '../../actions/issuesActions';
// import { fetchPullRequests } from '../../actions/pullActions';
const UserSearch = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const getUserData = event => {
    event.preventDefault();
    dispatch(fetchUserInfo(query));
    dispatch(fetchRepos(query));
    dispatch(fetchIssues(query));
  };

  return (
    <>
      <h1>Search Github by username</h1>
      <form onSubmit={getUserData}>
        <input type="text" placeholder="Github username" onChange={({ target }) => setQuery(target.value)} />
        <button>🔍</button>
      </form>
    </>
  );
};

export default UserSearch;
