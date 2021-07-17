import React from 'react';

import { ReactComponent as IconSearch } from 'assets/chat/search.svg';
import { ReactComponent as IconFilter } from 'assets/chat/filter.svg';

import {
  Container, Content, Search, Input, Filter,
} from './styles';

const Header: React.FC = () => (
  <Container>
    <Content>
      <Filter><IconFilter /></Filter>
      <Input type="text" name="search" placeholder="جستجوی پیام ها" />
      <Search><IconSearch /></Search>
    </Content>
  </Container>
);

export default Header;
