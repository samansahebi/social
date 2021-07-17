import React from 'react';
import Wrapper from 'components/Wrapper';
import { ReactComponent as Pencil } from 'assets/profile/pencilBig.svg';
import { Container, Header, Title, Button, Content, Text } from './styles';

interface Props{
    about:string,
}

const About: React.FC<Props> = ({about}) => {
    return <Wrapper>
        <Container>
            <Header>
                <Button><Pencil /></Button>
                <Title>درباره</Title>
            </Header>
            <Content>
                <Text>{about}</Text>
            </Content>
        </Container>
    </Wrapper>;
}

export default About;