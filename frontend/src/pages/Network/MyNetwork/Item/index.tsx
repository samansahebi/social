import React, { ReactNode } from 'react';

import { Container, Name, Number, Text, Icon } from './styles';

interface Props {
    icon: ReactNode;
    text: string;
    number?: string;
}

const Item: React.FC<Props> = ({ icon, text, number }) => (
    <Container>
        <Name>
            <Text>{text}</Text>
            <Icon>{icon}</Icon>
        </Name>
        <Number>{number}</Number>
    </Container>
);

export default Item;
