import React from 'react';

import { Container, Text, Number } from './styles';

interface Props {
    text: string;
    number: number;
}

const Record: React.FC<Props> = ({ text, number }) => (
    <Container>
        <Number>{number}</Number>
        <Text>{text}</Text>
    </Container>
);

export default Record;
