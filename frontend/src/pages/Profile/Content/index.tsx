import React, { useEffect } from 'react';

import Container from './styles';
import User from './User';
import About from './About';
import Carousel from './Carousel';
import Panel from './Panel';
import Activities from './Activities';
import Experience from './Experience';
import Skills from './Skills';
import Achievements from './Achievements';
import Interests from './Interests';
import { useDispatch, useSelector } from 'react-redux';
import { profileBanner } from 'redux/actions/profile';
import { AppState } from 'redux/store';
import { useParams } from 'react-router-dom';
interface Props{
  profile_id:number
}
const Content: React.FC<Props> = ({profile_id}) => {
  const dispatch = useDispatch();
  const banner= useSelector((state:AppState)=>state.profile.banner);
  // const profile_id= useSelector((state:AppState)=>state.auth.profile_id);
  useEffect(()=>{
   dispatch(profileBanner(profile_id as number));   
   console.log(profile_id) 
  },[dispatch,profile_id])
  return(
  <Container>
    <User firstName={banner.first_name} lastName={banner.last_name} avatar={banner.avatar} cover={banner.background} tagline={banner.tagline} />
    <Panel />
    <About about={banner.about} />
    <Carousel />
    <Activities />
    <Experience />
    <Skills skill={banner.skills}/>
    <Achievements />
    <Interests />
  </Container>
  );
}

export default Content;
