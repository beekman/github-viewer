import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserDetails } from '../../selectors/userSelector';
import styles from './UserDetails.css';

export default function UserDetails() {
  const state = useSelector(state => state);
  const user = selectUserDetails(state);

  if(!user) {
    return (
      <h1></h1>
    );
  }

  return (
    <section className={styles.UserDetails}>
      <h3><a href={user.url}>{user.name}{user.login}</a></h3>
      <img src={user.img} title='{user.login} profile image' />
      <h2><a href={user.url}>{user.username}</a> ({user.name})</h2>
      <p>{user.bio}</p>
      <p>{user.location}</p>
    </section>
  );
}
