import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from 'redux/store';
import { Container, Cover, User } from './styles';

interface Props {
  avatar:string
}
const Photo: React.FC<Props> = ({avatar}) => {
  const id = useSelector((state:AppState)=>state.auth.profile_id);

  return(
  <Link to={"/profile/"+id}>
    <Container>
      <Cover />
      <User><img src={avatar} alt="" /></User>
    </Container>
  </Link>
  )
};

export default Photo;
