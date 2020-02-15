import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserInfo } from '../../actions/userActions';

const UserSearch = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(fetchUserInfo(username));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={({ target }) => setUsername(target.value)} />
      <button>Lookup</button>
    </form>
  );
};

export default UserSearch;
