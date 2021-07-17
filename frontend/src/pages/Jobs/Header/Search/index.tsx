import React from 'react';

import { ReactComponent as SearchIcon } from 'assets/jobs/search.svg';
import { ReactComponent as MapIcon } from 'assets/jobs/map.svg';

import {
    Container, Header, Title, Content, Inputs, Button,
} from './styles';
import Input from './Input';

const Search: React.FC = () => (
    <Container>
        <Header><Title>جستجوی کار جدید</Title></Header>
        <Content>
            <Inputs>
                <Input icon={<SearchIcon />} name="search" text="جستجوی موقعیت های شغلی" />
                <Input icon={<MapIcon />} name="map" text="جستجوی مکان مورد نظر" />
            </Inputs>
            <Button>جستجو</Button>
        </Content>
    </Container>
);

export default Search;
