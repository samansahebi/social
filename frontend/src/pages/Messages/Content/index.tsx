import React from 'react';
import Wrapper from 'components/Wrapper';
import Chat from './Chat';
import Conversations from './Conversations';

import Container from './styles';

const Content: React.FC = () => (
    <Wrapper>
        <Container>
            <Chat />
            <Conversations />
        </Container>
    </Wrapper>
);

export default Content;
