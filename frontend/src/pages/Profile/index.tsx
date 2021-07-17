import React, { useEffect } from 'react';
import {
  WrapperAd, Container, Main, Aside,
} from './styles';
import Right from './Right';
import Content from './Content';
import { useParams } from 'react-router-dom';

const Profile: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0));
  const {id}:any = useParams();

  return (
    <WrapperAd>
      <Container>
        <Main>
          <Content profile_id={id as number}/>
        </Main>
        <Aside>
          <Right />
        </Aside>
      </Container>
    </WrapperAd>
  );
};

export default Profile;
