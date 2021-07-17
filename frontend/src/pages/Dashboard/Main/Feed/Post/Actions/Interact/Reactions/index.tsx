import React from 'react';

import { ReactComponent as Like } from 'assets/main/reactions/like.svg';
import { ReactComponent as Hated } from 'assets/main/reactions/hated.svg';
import { ReactComponent as Loved } from 'assets/main/reactions/loved.svg';
import { ReactComponent as Congratulations } from 'assets/main/reactions/congratulations.svg';
import { ReactComponent as Curious } from 'assets/main/reactions/curious.svg';

import { Container, List, Item } from './styles';
import { useDispatch } from 'react-redux';
import { vote } from 'redux/actions/posts';

interface Props{
    id:number,
}
const Reactions: React.FC<Props> = ({id}) => {
    const dispatch= useDispatch();
    const handleClick = (Type:string,Type_id:number)=>{
        dispatch(vote(id,Type,Type_id))
    }
    return(
    <Container>
        <List>
            <Item ><Hated onClick={()=> handleClick('like',1)} /></Item>
            <Item><Loved onClick={()=> handleClick('like',1)} /></Item>
            <Item><Congratulations onClick={()=> handleClick('like',1)} /></Item> 
            <Item><Curious onClick={()=> handleClick('like',1)} /></Item> 
            <Item><Like onClick={()=> handleClick('like',1)} /></Item>
        </List>
    </Container>
    )
};

export default Reactions;
