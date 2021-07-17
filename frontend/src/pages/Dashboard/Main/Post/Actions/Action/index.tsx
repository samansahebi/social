import React from 'react';

import { Container, Icon } from './styles';

const Action: React.FC = ({ children }) => {

    return(
            <Container >
                <Icon>{children}</Icon>
            </Container>
 
    )
};

export default Action;
