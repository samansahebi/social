import React from 'react';

import { Container, Content, WrapperImages, BoxImages, List, Item, Border, Text, BoxShow, Show } from './styles';

const Header: React.FC = () => {
    return <Container>
        <Content>
            <WrapperImages>
                <BoxImages>
                    <List>
                        <Item><Border><img src="" alt="Someone" /></Border></Item>
                        <Item><Border><img src="" alt="Someone" /></Border></Item>
                        <Item><Border><img src="" alt="Someone" /></Border></Item>
                    </List>
                    <Text><strong>Ada Lovelace</strong><span> e mais 4 pessoas aceitaram seu convite de conexão</span></Text>
                </BoxImages>
            </WrapperImages>
            <BoxShow><Show>Visualizar tudo</Show></BoxShow>
        </Content>
    </Container>;
}

export default Header;