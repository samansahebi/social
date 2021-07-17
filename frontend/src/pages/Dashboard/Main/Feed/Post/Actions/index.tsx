import React from 'react';
import Container from './styles';
import Records from './Records';
import Interact from './Interact';

interface Props{
    id:number,
    like:number,
    comment:number,
}
const Actions: React.FC<Props> = ({id,like,comment}) => (
    <Container>
        <Records like={like} comment={comment}/>
        <br/>
        <Interact id={id} />
    </Container>
);

export default Actions;
