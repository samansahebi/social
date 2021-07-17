import React from 'react';

import { ReactComponent as Message } from 'assets/profile/message.svg';

import {
  Container, Image, Infos, Border, Name, Job, Icon,
} from './styles';

interface Props {
    image: string;
    name: string;
    job: string;
}

const Item: React.FC<Props> = ({ image, name, job }) => (
  <Container>
    <Border>
      <Icon>
        <Message />
      </Icon>
      <Infos>
        <Name>
          {name}
        </Name>
        <Job>{job}</Job>
      </Infos>
    <Image>
      <img src={image} alt="" />
    </Image>
    </Border>
  </Container>
);

export default Item;
