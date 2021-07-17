import React from 'react';
import Wrapper from 'components/Wrapper';
import { ReactComponent as Save } from 'assets/left/save.svg';
import { Container, Footer } from './styles';
import Header from './Header';
import Main from './Main';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/store';

const Profile: React.FC = () => {
    const postsState = useSelector((state:AppState)=>state.profile.dashboard);
    
    return(
    <Container>
        <Wrapper>
            <Header fullName={postsState.user_name} tagline={postsState.user_tagline} avatar={postsState.user_avatar} />
            <Main bookmarks={postsState.bookmarks} connection={postsState.connection} />
            <Footer>
                <span>ذخیره شده ها</span>
                <Save />
            </Footer>
        </Wrapper>
    </Container>
    )
};

export default Profile;
