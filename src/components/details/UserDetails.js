import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserInfo } from '../../actions/userActions';
import { isUserDetailsLoading, getUserDetails } from '../../selectors/userSelector';
import Loading from '../Loading';


const UserDetails = () =>{
  const dispatch = useDispatch();
  const loading = useSelector(isUserDetailsLoading);
  const details = useSelector(getUserDetails);

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);

  if(loading) return <Loading />;
  console.log(typeof details.login);
  return (
    <section>
      <h3>{details.login ? details.login : 'Search for User'}</h3>
      {/* <p>Repos: {repos}</p> */}
    </section>
  );
};
UserDetails.propTypes = {
  // username: PropTypes.string.isRequired,
};

export default UserDetails;
