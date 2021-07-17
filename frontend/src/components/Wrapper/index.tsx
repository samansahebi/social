import React from 'react';

import Container from './styles';

interface Props {
    margin?: boolean;
    top?: boolean;
    panel?: boolean;
    shadow?: boolean;
}

const Wrapper: React.FC<Props> = ({
    children, margin = false, top = false, panel = false, shadow = false
}) => (
        <Container margin={margin} top={top} panel={panel} shadow={shadow}>
            {children}
        </Container>
    );

export default Wrapper;
