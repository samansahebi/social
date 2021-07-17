import React from 'react';

import { Container, Title } from './styles';
import Sugestions from './Sugestions';

const Main: React.FC = () => {
    return <Container>
        <Title>با مشاهده این آموزش ها مهارت های خود را ارتقا دهید</Title>
        <Sugestions />
    </Container>;
}

export default Main;