import React from 'react';
import { SectionProfile } from './Profile-styled';
import ImgProfile from '../../../image/profile.png';

const Profile = ({ userGithub }) => {
  return (
    <SectionProfile>
      <img src={userGithub.avatar_url || ImgProfile} alt="profile image" className="profile-img" />
      <span>{userGithub.login || 'Avengers'}</span>
      <span>{userGithub.name || '홍길동'}</span>
    </SectionProfile>
  )
};

export default Profile;