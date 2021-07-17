import React, { useEffect } from 'react';
import Sticky from 'react-stickynode';
import Wrapper from 'components/Wrapper';
import Category from './Category';
import { Container, Footer } from './styles';
import Item from './Item';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { hashtag } from 'redux/actions/hashtag';

const Social: React.FC = () => {
    const hashtags = useSelector((state:AppState)=>state.hashtag.hashtag);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(hashtag())
    },[dispatch])
    return(
    <Sticky top={60}>
        <Container>
            <Wrapper>
                <Category title="صفحات شخصی" >
                    <Item text="JavaScript" />
                    <Item text="Front End Developer Group" />
                    <Item hashtag text="softwaredeveloper" />
                    <Item hashtag text="github" />
                    <Item hashtag text="androidevelopment" />
                </Category>
                <Category title="صفحات کاری">
                    <Item text="JavaScript" />
                    <Item text="Front End Developer Group" />
                    <Item text="HTML5 / CSS3 / JavaScript" />
                </Category>
                <Category title="هشتگ ها" gray>
                    {hashtags.map((hash,i)=>{
                        return(
                            <Item key={i} hashtag text={hash.topic} />
                        )
                    })}
                </Category>
                <Footer>اطلاعات بیشتر</Footer>
            </Wrapper>
        </Container>
    </Sticky>
    )
};

export default Social;
