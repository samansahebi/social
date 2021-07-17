import React from 'react';

import { ReactComponent as IconMore } from 'assets/messages/more.svg';

import {
    Container, Infos, Name, Online, More, Status,
} from './styles';

const Header: React.FC = () => (
    <Container>
        <More>
            <IconMore />
        </More>
        <Infos>
            <Name>نام مخاطب</Name>
            <Online>
                آنلاین
                <Status />
            </Online>
        </Infos>

    </Container>
);

export default Header;
