import React, { ReactNode } from 'react';

import {
  Container, BoxImage, Text, Name, Message,
} from './styles';

interface Props {
    image?: string;
    online?: ReactNode;
    name: string;
    date: string;
    message: string;
}

const Chat: React.FC<Props> = ({
  image, name, message, online,
}) => (
  <Container>
    <Text>
      <Name>{name}</Name>
      <Message>
        <span>{message}</span>
      </Message>
    </Text>
    <BoxImage>
      {online}
      <img src={image} alt="" />
    </BoxImage>
  </Container>
);

export default Chat;
