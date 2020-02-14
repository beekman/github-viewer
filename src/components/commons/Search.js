import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGithubUserDetails } from '../../actions/userActions';

const VideoForm = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(fetchGithubUserDetails(username));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={({ target }) => setUsername(target.value)} />
      <button>Lookup</button>
    </form>
  );
};

export default VideoForm;
