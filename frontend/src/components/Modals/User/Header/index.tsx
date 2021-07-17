import React from 'react';
import { Container, User, Profile } from './styles';
import Logo from './Photo';
import Info from './Info';
import CTA from './CTA';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/store';

const Header: React.FC = () => {

  const profileState = useSelector((state:AppState)=>state.profile.dashboard);

  return(
  <Container>
    <User>
      <Info user_name={profileState.user_name} user_tagline={profileState.user_tagline}/>
      <Logo user_avatar={profileState.user_avatar} />
    </User>
    <Profile>
      <CTA />
    </Profile>
  </Container>
  )
};

export default Header;
