import React from 'react';
import Wrapper from 'components/Wrapper';

import { Container, Content } from './styles';
import Header from './Header';
import Footer from './Footer';

interface Props {
    id:number;
    number: string;
    name: string;
    job: string;
    photo: string;
    color: string;
    padding?: boolean;
}

const Item: React.FC<Props> = ({
  id,name, number, job, photo, color, padding = false,
}) => (
  <Wrapper margin>
    <Container>
      <Content>
        <Header name={name} job={job} photo={photo} color={color} padding={padding} />
        <Footer id={id} number={number} />
      </Content>
    </Container>
  </Wrapper>
);

export default Item;
