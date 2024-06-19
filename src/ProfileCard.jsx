// src/ProfileCard.jsx
// import React from 'react';
import './ProfileCard.css'; // Import the ProfileCard component's styles;

const ProfileCard = ({ name, age, profilePicture, bio }) => (
  <div className="profile-card">
    <img src={profilePicture} alt={`${name}'s profile`} className="profile-image" />
    <h2 className="profile-name">{name}</h2>
    <p className="profile-age">Age: {age}</p>
    <p className="profile-bio">{bio}</p>
  </div>
);

import PropTypes from 'prop-types';

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  profilePicture: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default ProfileCard;