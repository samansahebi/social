import React, { useEffect } from 'react';
import { WrapperAd, Container, Main } from './styles';
import Content from './Content';

const Jobs: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0));
  return (
    <WrapperAd>
      <Container>
        <Main>
          <Content />
        </Main>
      </Container>
    </WrapperAd>
  );
};

export default Jobs;
