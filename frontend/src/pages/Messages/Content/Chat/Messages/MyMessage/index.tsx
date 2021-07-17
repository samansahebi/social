import React, { ReactNode } from 'react';

import {
  Container, Box, Text, Infos, Name, Connection, Content,
} from './styles';

interface Props {
    image: string;
    content: ReactNode;
    name: string;
    time: string;
}

const Message: React.FC<Props> = ({
  image, name, time, content,
}) => (
  <Container>
    <Box><img src={image} alt="" /></Box>
    <Text>
      <Infos>
        <Connection>
          {time}
        </Connection>
        <Name>{name}</Name>
      </Infos>
      <Content>
        {content}
      </Content>
    </Text>
  </Container>
);

export default Message;
