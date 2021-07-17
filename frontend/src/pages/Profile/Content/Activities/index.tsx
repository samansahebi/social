import React from 'react';
import Wrapper from 'components/Wrapper';
import Content from './Content';
import { Container, Header, Title, Icon, Label } from './styles';

const Activities: React.FC = () => {
    return <Wrapper>
        <Container>
            <Header>
                <Icon>
                    <Label>نمایش همه</Label>
                </Icon>
                <Title>فعالیت ها</Title>
            </Header>
            <Content />
        </Container>
    </Wrapper>;
}

export default Activities;