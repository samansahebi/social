import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as IconSearch } from 'assets/messages/search.svg';
import { ReactComponent as IconFilter } from 'assets/messages/filter.svg';

import {
    Container, Input, BoxSearch, BoxFilter,
} from './styles';

const Search: React.FC = () => (
    <Container>
        <BoxFilter>
            <Link to="/">
                <IconFilter />
            </Link>
        </BoxFilter>
        <BoxSearch>
            <IconSearch />
        </BoxSearch>
        <Input type="text" name="messages" placeholder="جستجوی مخاطبین" />
    </Container>
);

export default Search;
