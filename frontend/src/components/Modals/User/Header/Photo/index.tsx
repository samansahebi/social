import React from 'react';
import Container from './styles';

interface Props {
  user_avatar: string;
}

const Photo: React.FC<Props> = ({user_avatar}) => (
  <Container>
    <img src={user_avatar} alt="" />
  </Container>
);

export default Photo;
