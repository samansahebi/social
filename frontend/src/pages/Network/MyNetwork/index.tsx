import React from 'react';
import { ReactComponent as Group } from 'assets/network/group.svg';
import { ReactComponent as Contacts } from 'assets/network/contacts.svg';
import { ReactComponent as Follow } from 'assets/network/follow.svg';
import { ReactComponent as Pages } from 'assets/network/pages.svg';
import { ReactComponent as Newsletter } from 'assets/network/newsletter.svg';
import { ReactComponent as Hashtag } from 'assets/network/hashtag.svg';
import Wrapper from 'components/Wrapper';
import { Container, Content, Title, List } from './styles';
import Item from './Item';
import { Divider } from 'pages/Dashboard/Main/Feed/Category/styles';

const MyNetwork: React.FC = () => (
  <Wrapper>
    <Container>
      <Content>
        <Title>مدیریت ارتباطات</Title>
        <Divider/>
        <List>
          <Item icon={<Group />} text="گروه ها" number="6.167" />
          <Item icon={<Contacts />} text="مخاطبین" />
          <Item icon={<Follow />} text="دنبال شونده ها" number="3" />
          <Item icon={<Pages />} text="صفحات" number="20" />
          <Item icon={<Newsletter />} text="خبرنامه ها" />
          <Item icon={<Hashtag />} text="هشتگ ها" number="25" />
        </List>
      </Content>
    </Container>
  </Wrapper>
);

export default MyNetwork;
