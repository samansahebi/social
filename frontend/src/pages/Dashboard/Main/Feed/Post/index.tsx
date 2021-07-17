import React from 'react';

import Wrapper from 'components/Wrapper';
import {Container,Message} from './styles';
import Header from './Header';
import Content from './Content';
import Actions from './Actions';

interface Props {
    id:number;
    name: string;
    text:string;
    message: string;
    job: string;
    date: string;
    userPhoto: any;
    active?: boolean;
    image: string;
    alt: string;
    like:number;
    comment:number;
}

const Post: React.FC<Props> = ({
    id,name,text,message, job, date, userPhoto, active = false, image, alt,like,comment
}) => (
        <Wrapper>
            <Container>
                {message && <Message>{message}</Message>}
                <Header
                    name={name}
                    text={text}
                    job={job}
                    date={date}
                    image={userPhoto}
                    active={active}
                />
                <Content><img src={image} alt={alt} /></Content>
                <Actions id={id} like={like} comment={comment} />
            </Container>
        </Wrapper>
    );

export default Post;
