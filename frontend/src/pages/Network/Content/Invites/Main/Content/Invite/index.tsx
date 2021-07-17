import React from 'react';

import {
  Container, Content, User, BoxImage, Image, Text, Name, Job, Connections, Actions, Ignore, Accept,
} from './styles';

interface Props {
    connection_id:number;
    user_id:number;
    image: string;
    name: string;
    job: string;
    connection?: boolean;
}

const Invite: React.FC<Props> = ({ connection_id,user_id,image, name, job, connection = false}) => {
  
  return(
  <Container>
    <Content>
      <Actions>
        <Accept>تایید</Accept>
        <Ignore>رد</Ignore>
      </Actions>
      <User>
        <Text>
          <Name>{name}</Name>
          <Job>{job}</Job>
          {connection && <Connections> Alan Turing e mais 37 pessoas</Connections>}
        </Text>
        <BoxImage>
          <Image>
            <img src={image} alt="" />
          </Image>
        </BoxImage>
      </User>
    </Content>
  </Container>
  )
};

export default Invite;
