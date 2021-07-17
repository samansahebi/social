import React, { useState } from 'react';

import { ReactComponent as Connection } from 'assets/network/connection.svg';

import { Container, Common, Icon, Text, Button } from './styles';
import { useDispatch } from 'react-redux';
import { connectionRequest } from 'redux/actions/connections';

interface Props {
    id:number;
    number?: string;
}

const Footer: React.FC<Props> = ({ id, number }) => {
    const [btnText,setBtnText]=useState('درخواست ارتباط')
    const dispatch = useDispatch();
    const handleClick=(id:number)=>{
        dispatch(connectionRequest(id))
        setBtnText('انصراف از درخواست')
    }
    return <Container>
        <Common>
            <Text> ارتباط مشترک </Text>
            <Text>{number}</Text>
            <Icon><Connection /></Icon>
        </Common>
        <Button onClick={()=>handleClick(id)}>{btnText}</Button>
    </Container>;
}

export default Footer;