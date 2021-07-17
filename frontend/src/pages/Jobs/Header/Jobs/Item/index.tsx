import React, { ReactNode } from 'react';

import { Container, Icon, Text } from './styles';

interface Props {
    icon: ReactNode;
    text: string;
}

const Item: React.FC<Props> = ({ icon, text }) => (
    <Container>
        <Text>{text}</Text>
        <Icon>{icon}</Icon>
    </Container>
);

export default Item;
