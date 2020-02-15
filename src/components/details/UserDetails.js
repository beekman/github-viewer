import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserInfo } from '../../actions/userActions';
import { isUserDetailsLoading, getUserDetails } from '../../selectors/userSelector';
import Loading from '../Loading';


const UserDetails = () =>{
  const dispatch = useDispatch();
  const loading = useSelector(isUserDetailsLoading);
  const userdetails = `useSelector`(getUserDetails);

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);

  if(loading) return <Loading />;

  return (
    <section>
      <h3>{userdetails.username}</h3>
      {/* <p>Repos: {repos}</p> */}
    </section>
  );
};
UserDetails.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserDetails;
