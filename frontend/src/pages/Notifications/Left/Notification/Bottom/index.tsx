import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

const Bottom: React.FC = () => (
    <Container>
        <Content>
            <span>رویدادهای خود را بهینه کنید</span>
            <Link to="/">شخصی سازی رویدادها</Link>
        </Content>
    </Container>
);

export default Bottom;
