import React, { ReactNode } from 'react';

import { Container, Search, Icon } from './styles';

interface Props {
    text: string;
    name: string;
    icon: ReactNode;
}

const Input: React.FC<Props> = ({ text, name, icon }) => (
    <Container>
        <Icon>{icon}</Icon>
        <Search name={name} placeholder={text} />
    </Container>
);

export default Input;
