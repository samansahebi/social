import React from 'react';

import { Container, Name, Job } from './styles';

interface Props {
    user_name: string;
    user_tagline: string;
  }

const Info: React.FC<Props> = ({user_name,user_tagline}) => (
    <Container>
        <Name>{user_name}</Name>
        <Job>{user_tagline}</Job>
    </Container>
);

export default Info;
