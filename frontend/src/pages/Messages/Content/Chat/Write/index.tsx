import React from 'react';
import { Container, Content, Input } from './styles';

const Write: React.FC = () => (
    <Container>
        <Content>
            <Input
                placeholder="...نوشتن پیام"
                name="message"
            />
        </Content>
    </Container>
);

export default Write;
