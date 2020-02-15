import React from 'react';
import UserSearch from '../UserSearch/UserSearch';
import UserDetails from '../details/UserDetails';


const Home = () => (
  <>
    <UserSearch />
    <UserDetails username='bender'/>
  </>
);

export default Home;
