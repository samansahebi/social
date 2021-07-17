import React, { useEffect } from 'react';

import Wrapper from 'components/Wrapper';
import {
  Container, Title, Content, User,
} from './styles';
import Item from './Item';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { socialprofile } from 'redux/actions/connections';

const Connections: React.FC = () => {
  const profiles = useSelector((state:AppState)=>state.connections.socialprofile)
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(socialprofile())
  },[dispatch])
  return(
  <Wrapper>
    <Container>
      <Title> افراد پیشنهاد شده</Title>
      <Content>
        {profiles.map((p,i)=>{
          return(
            <User>
            <Item key={i} color="#ff4d4d" id={p.id} photo={p.avatar} name={p.first_name + ' '+ p.last_name} job={p.tagline} number="33" />
            {' '}
            </User>
          )
        })}
      </Content>
    </Container>
  </Wrapper>
  )
};

export default Connections;
