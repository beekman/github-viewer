import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserInfo } from '../../actions/userActions';
import { fetchRepos } from '../../actions/repoActions';
import { GiMagnifyingGlass } from 'react-icons/gi';
import styles from './UserSearch.css';

const UserSearch = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const getUserData = event => {
    event.preventDefault();
    dispatch(fetchUserInfo(query));
    dispatch(fetchRepos(query));
  };

  return (
    <section className={styles.UserSearch}>
      <h1>Search Github by username</h1>
      <form onSubmit={getUserData}>
        <input type="text" placeholder="Github username" onChange={({ target }) => setQuery(target.value)} />
        <button title="Search"><GiMagnifyingGlass /></button>
      </form>
    </section>
  );
};

export default UserSearch;
