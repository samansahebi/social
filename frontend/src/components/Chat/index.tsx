import React, { useState } from 'react';

import { ReactComponent as EditIcon } from 'assets/chat/edit.svg';
import { ReactComponent as MoreIcon } from 'assets/chat/more.svg';

import {
  Container, Header, ContentHeader, Left, User, Image, Connection,
  Title, Text, Right, Edit, More, Expand,
} from './styles';
import Content from './Content';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/store';

const Chat: React.FC = () => {
  const [show, setShow] = useState(false);
  const profileState = useSelector((state:AppState)=>state.profile.dashboard);

  return (
    <>
      <Container onClick={() => setShow(!show)} show={show}>
        <Header>
          <ContentHeader>
            <Left>
              <Edit><EditIcon /></Edit>
              <More><MoreIcon /></More>
            </Left>

            <Right>
              <Title>
                <Text>پیام ها</Text>
              </Title>

              <User>
                <Image><img src={profileState.user_avatar} alt="" /></Image>
                <Connection />
              </User>
            </Right>
          </ContentHeader>
        </Header>
        <Expand>
          <Content />
        </Expand>
      </Container>

    </>
  );
};

export default Chat;
