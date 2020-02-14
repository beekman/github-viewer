import React from 'react';
import PropTypes from 'prop-types';

const UserDetails = ({ username }) => (
  <section>
    <h3>{username} Details</h3>
    {/* <p>Repos: {repos}</p> */}
  </section>
);

UserDetails.propTypes = {
  username: PropTypes.string.isRequired,
  repos: PropTypes.string.isRequired
};
