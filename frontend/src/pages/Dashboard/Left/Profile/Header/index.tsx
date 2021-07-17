import React from 'react';
import Photo from './Photo';
import Info from './Info';

import Container from './styles';

interface Props {
    fullName: string;
    avatar: string;
    tagline: string;
}

const Header: React.FC<Props> = ({fullName,tagline,avatar}) => (
    <Container>
        <Photo avatar={avatar} />
        <Info fullName={fullName} tagline={tagline} />
    </Container>
);

export default Header;
