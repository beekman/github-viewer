import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserDetails } from '../../selectors/userSelector';
import styles from './UserDetails.css';

export default function UserDetails() {
  const state = useSelector(state => state);
  const user = selectUserDetails(state);

  if(!user){
    return (
      <h1></h1>
    );
  }

  return (
    <section className={styles.UserDetails}>
      <h3><a href={user.url}>{user.name}
        {user.login ? user.login : 'Search for User'}</a></h3>
      <img src={user.avatar_url} title='{user.login} profile image' />
      <h2>{user.username}</h2>
      <p>{user.name}<br /><a href={user.url}>{user.url}</a></p>
    </section>
  );
}
