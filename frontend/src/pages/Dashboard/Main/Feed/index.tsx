import React from 'react';
import Category from './Category';
import Container from './styles';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { feed } from 'redux/actions/posts';
import { useEffect } from 'react';

interface postInterface{
  id:number
  text:string
  posted_at:string
  media_type:string
  is_liked_by_user:boolean
  is_saved_by_user:boolean
  media:string
  viewer_name:string
  viewer_avatar:string
  viewer_tagline:string
  author_id:number
  author_name:string
  author_avatar:string
  author_tagline:string
  likes_count:number
  comment_count:number
  liked_by:any
  comments:any
  message:string
}

export type postsT = postInterface[]

const Feed: React.FC = () => {
  const postsState = useSelector((state:AppState)=>state.feed.posts);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(feed())
  },[dispatch])

  return(
  <Container>
    <Category />
    {postsState.map((p,i)=>{
      return(
      <Post
        key={i}
        id={p.id}
        name={p.author_name}
        text={p.text}
        message={p.message}
        job={p.author_tagline}
        date={p.posted_at}
        userPhoto={p.author_avatar}
        active
        image={p.media}
        alt={p.message}
        like={p.likes_count}
        comment={p.comment_count}
      />)
    })}
  </Container>
  )};

export default Feed;
