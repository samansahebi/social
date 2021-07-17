import React, { ReactNode } from 'react';

import { Container, Text, Icon } from './styles';

interface Props {
    title: string;
    icon?: ReactNode,
}

const Title: React.FC<Props> = ({
    title, icon,
}) => (
        <Container>
            <Icon>{icon}</Icon>
            <Text>{title}</Text>
        </Container>
    );

export default Title;
