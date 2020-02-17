import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserInfo } from '../../actions/userActions';

// import { fetchIssues } from '../../actions/issuesActions';
// import { fetchPulls } from '../../actions/pullActions';
import { isLoadingUserDetails, selectUserDetails } from '../../selectors/userSelector';
import UserRepos from '../userRepos/UserRepos';

import Loading from '../Loading';


const UserDetails = () =>{
  const dispatch = useDispatch();
  const loading = useSelector(isLoadingUserDetails);
  const details = useSelector(selectUserDetails);
  const issues = useSelector(fetchIssues);
  // const pulls = useSelector(selectRepoPullRequests);

  useEffect(() => {
    dispatch(fetchUserInfo());
    // dispatch(fetchIssues());
  }, []);

  if(loading) return <Loading />;

  console.dir(details);
  return (
    <section>
      <h3><a href={details.url}>{details.name}
        {details.login ? details.login : 'Search for User'}</a></h3>
      <img src={details.avatar_url} title='{details.login} profile image'/>
    </section>
  );
};
UserDetails.propTypes = {
  details: PropTypes.array.isRequired,
};

export default UserDetails;
