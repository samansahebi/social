import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from 'redux/store';
import {
    Container, BoxName, Name, BoxJob, Job,
} from './styles';

interface Props {
    fullName: string;
    tagline: string;

}

const Info: React.FC<Props> = ({fullName,tagline}) => {
    const id = useSelector((state:AppState)=>state.auth.profile_id);

    return(
    <Container>
        <Link to={"/profile/"+ id}>
            <BoxName>
                <Name>{fullName}</Name>
            </BoxName>
        </Link>
        <BoxJob>
            <Job>{tagline}</Job>
        </BoxJob>
    </Container>
    )
};

export default Info;
