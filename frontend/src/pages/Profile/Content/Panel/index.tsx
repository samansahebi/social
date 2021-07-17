import React from 'react';
import Wrapper from 'components/Wrapper';
import { Container, Line } from './styles';
import Content from './Content';

const Painel: React.FC = () => {
    return <Wrapper panel>
        <Container>
            <Content />
            <Line />
        </Container>
    </Wrapper>;
}

export default Painel;