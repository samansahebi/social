import React from 'react';

import { Container, Invites } from './styles';

const Header: React.FC = () => {
    return <Container>
            {/* <BoxShow><Show>مشاهده همه</Show></BoxShow> */}
            <Invites>درخواست های ارتباط</Invites>
    </Container>;
}

export default Header;