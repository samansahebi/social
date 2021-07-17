import React from 'react';

import { Container, Title } from './styles';
import Wrapper from 'components/Wrapper';
import Items from './Items';

const Main: React.FC = () =>
    <Wrapper>
        <Container>
            <Title>بر اساس پروفایل شما</Title>
            <Items />
        </Container>
    </Wrapper>;

export default Main;