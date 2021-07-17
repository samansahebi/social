import React from 'react';
import Container from './styles';
import Header from './Header';
import Infos from './Infos';
import Wrapper from 'components/Wrapper';

interface Props{
    firstName:string,
    lastName:string,
    avatar:string,
    cover:string,
    tagline:string,
  }

const User: React.FC<Props> = ({firstName,lastName,avatar,cover,tagline}) => {
    return (
        <Wrapper><Container>
            <Header avatar={avatar} cover={cover} />
            <Infos firstName={firstName} lastName={lastName} avatar={avatar} tagline={tagline} />
        </Container>
        </Wrapper>);
}

export default User;