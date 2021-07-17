import React, { useEffect } from 'react';
import { WrapperAd, Container, Aside, Core} from './styles';
import Left from './Left';
import Main from './Main';

const Notification: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0));
  return (
    <WrapperAd>
      <Container>
        <Aside>
          <Left />
        </Aside>
        <Core>
          <Main />
        </Core>
      </Container>
    </WrapperAd>
  );
};

export default Notification;
