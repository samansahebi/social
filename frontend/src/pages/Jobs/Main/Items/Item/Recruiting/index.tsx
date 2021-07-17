import React from 'react';

import { ReactComponent as RecruitingIcon } from 'assets/jobs/recruiting.svg';
import { Container, BoxImages, Text } from './styles';

const Recruiting: React.FC = () => {
    return <Container>
        <Text><span>Recrutando agora</span></Text>
        <BoxImages>
            <RecruitingIcon />
        </BoxImages>
    </Container>;
}

export default Recruiting;