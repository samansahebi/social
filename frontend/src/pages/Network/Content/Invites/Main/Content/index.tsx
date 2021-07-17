import React, { useEffect } from 'react';

import { Container, List } from './styles';
import Invite from './Invite';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { pendingConnections } from 'redux/actions/connections';

const Content: React.FC = () => {
  const pending = useSelector((state:AppState)=>state.connections.connectionList)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(pendingConnections('received'))
  },[dispatch])
  return(
  <Container>
    <List>
      {pending.map((p,i)=>{
        return(
          <Invite
            key={i}
            user_id={p.profile_id}
            connection_id={p.connection_id}
            image={p.connection_avatar}
            name={p.connection_name}
            job={p.connection_tagline}
          />
        )
      })}
    </List>
  </Container>
  )
};

export default Content;
