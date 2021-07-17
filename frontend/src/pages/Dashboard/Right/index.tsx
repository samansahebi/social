import React from 'react';
import Container from './styles';
import Trends from './Trends';

const Main: React.FC = () => (
  <Container>
    <Trends />
    {/* <Sticky top={60}>
      <Publish banner />
    </Sticky> */}
  </Container>
);

export default Main;
