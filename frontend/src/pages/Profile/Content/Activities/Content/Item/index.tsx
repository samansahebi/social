import React from 'react';

import {
  Container, Image, Infos, Name, Comment,
} from './styles';

interface Props {
    image: string;
    name: string;
}

const Item: React.FC<Props> = ({ image, name }) => (
  <Container>
    <Infos>
      <Name>{name}</Name>
      <Comment>Christy comentou</Comment>
    </Infos>
    <Image>
      <img src={image} alt="" />
    </Image>
  </Container>
);

export default Item;
