import React from 'react';
import Sticky from 'react-stickynode';
import Wrapper from 'components/Wrapper';
import Category from './Category';
import { Container, Footer } from './styles';
import Item from './Item';

const Trends: React.FC = () => (
    <Sticky top={60}>
        <Container>
            <Wrapper>
                <Category title="صفحات آموزشی">
                    <Item text="JavaScript" />
                    <Item text="Front End Developer Group" />
                    <Item text="HTML5 / CSS3 / JavaScript" />
                </Category>
                <Category title="آموزش های پیشنهاد شده">
                    <Item text="JavaScript" />
                    <Item text="Front End Developer Group" />
                    <Item text="HTML5 / CSS3 / JavaScript" />
                </Category>
                <Category title="آموزش های به روز">
                    <Item hashtag text="softwaredeveloper" />
                    <Item hashtag text="github" />
                    <Item hashtag text="androidevelopment" />
                </Category>
                <Footer>اطلاعات بیشتر</Footer>
            </Wrapper>
        </Container>
    </Sticky>
);

export default Trends;
