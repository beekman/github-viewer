import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserInfo, fetchUserRepos, fetchRepoPullRequests, fetchUserIssues } from '../../actions/userActions';
import { isUserDetailsLoading, getUserDetails, getUserRepos, getUserIssues, getRepoPullRequests } from '../../selectors/userSelector';
import Loading from '../Loading';


const UserDetails = () =>{
  const dispatch = useDispatch();
  const loading = useSelector(isUserDetailsLoading);
  const details = useSelector(getUserDetails);
  const repos = useSelector(getUserRepos);
  // const pullrequests = useSelector(getUserDetails);
  // const issues = useSelector(getUserIssues);

  useEffect(() => {
    dispatch(fetchUserInfo());
    dispatch(fetchUserIssues());
    dispatch(fetchUserRepos());
  }, []);

  if(loading) return <Loading />;
  console.log(typeof details.login);
  console.dir(details);
  return (
    <section>
      <h3><a href={details.url}>{details.name}
        {details.login ? details.login : 'Search for User'}</a></h3>
      <img src={details.avatar_url} title='{details.login} profile image'/>
      {console.dir(repos)};
      {console.dir(issues)};
      {/* <p>Repos: {repos}</p> */}
    </section>
  );
};
UserDetails.propTypes = {
  details: PropTypes.array.isRequired,
};

export default UserDetails;
