import React from 'react';

import { ReactComponent as MoreIcon } from 'assets/profile/pencilBig.svg';

import { Container, Header, Infos, Title, Icon, Content, Actions, Add } from './styles';

interface Props {
    title: string;
}

const Section: React.FC<Props> = ({ children, title }) => {
    return <Container>
        <Header>
            <Infos>
                <Actions>
                    <Icon><MoreIcon /></Icon>
                    <Add>مهارت جدیدی اضافه کنید</Add>
                </Actions>
                <Title>{title}</Title>
            </Infos>
        </Header>
        <Content>
            {children}
        </Content>
    </Container>;
}

export default Section;