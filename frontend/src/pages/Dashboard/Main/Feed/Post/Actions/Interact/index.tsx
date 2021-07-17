import React, { useState } from 'react';

import { ReactComponent as Like } from 'assets/main/like.svg';
import { ReactComponent as Comment } from 'assets/main/comment.svg';
import { ReactComponent as Share } from 'assets/main/share.svg';

import {Container,CommentsContainer,CommentsInput,CommentsSend,CommentsActionsContainer, Box, Infos, Connection, Name, Content,Text} from './styles';
import Item from './Item';
import Reactions from './Reactions';
import { useDispatch, useSelector } from 'react-redux';
import { commentSend } from 'redux/actions/posts';
import { AppState } from 'redux/store';

interface Props{
    id:number,
}
const Interact: React.FC<Props> = ({id}) => {
    const [show, setShow] = useState(false);
    const [commentView, setCommentView] = useState(false);
    const [commentContent, setCommentContent] = useState<string>();
    const profile_id = useSelector((state:AppState)=>state.auth.profile_id)
    const dispatch = useDispatch();
    const handleClick = ()=>{
        setCommentView(!commentView)
    }
    const handleChange = event=>{
        setCommentContent(event.target.value)
    }
    const sendComment = ()=>{
        dispatch(commentSend(id,commentContent as string,profile_id as number))
    }
    return (
        <>
        <Container onClickCapture={() => setShow(false)}>
            <Item text="اشتراک گذاری"><Share /></Item>
            <Item text="نظرات" ><Comment onClick={()=>handleClick()}/></Item>
            <div
                onMouseOver={() => setShow(true)}
                onFocus={() => setShow(true)}
            >
                <Item text="پسندیدن"><Like /></Item>
            </div>
            {show && <Reactions id={id} />}
        </Container>
        {commentView &&     <CommentsContainer>
                                <Box><img src={''} alt="" /></Box>
                                <Text>
                                <Infos>
                                    <Connection>
                                    {'22:22'}
                                    </Connection>
                                    <Name>{'سامان صاحبی'}</Name>
                                </Infos>
                                <Content>
                                    {'content'}
                                </Content>
                                </Text>
                            </CommentsContainer>
                        }
        <CommentsActionsContainer>
        <CommentsInput placeholder={'نظر خود را بنویسید'} onChange={handleChange}></CommentsInput>
        <CommentsSend onClick={sendComment}>ثبت نظر</CommentsSend>
        </CommentsActionsContainer>
        </>
    );
};

export default Interact;
