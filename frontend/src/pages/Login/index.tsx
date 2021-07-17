import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { authLogin } from 'redux/actions/auth';
import { Link, useHistory } from "react-router-dom";
import {Container,Button,Input,Title,Links,ButtonContainer,Label}from './styles'
const SignIn:React.FC=()=> {
    const dispatch = useDispatch();
    const authState= useSelector((state:AppState)=>state.auth.token)
    const history = useHistory();

    interface initialStateI{
      email:string,
      password: string
    }
    const initialState = {
        email: "",
        password: ""
    }
    if (authState){
        history.push('/dashboard')
    }
    const [formData, setFormData] = useState<initialStateI>(initialState);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        dispatch(authLogin(formData.email, formData.password))
    }
    return (
        <Container>
            <Title>سامانه ارتباطی منشور</Title>
            <Links>
                <Label><Link to={"/SignUp"}>ثبت نام</Link></Label><Label><Link to={"/Login"}>ورود</Link></Label>
            </Links>
            <Input type="text" name="email" placeholder="آدرس ایمیل" onChange={handleChange} required />
            <Input type="password" name="password" placeholder="گذرواژه" onChange={handleChange} required />
            <ButtonContainer>
            <Button type="submit" onClick={handleClick} >ورود</Button>
            </ButtonContainer>
        </Container>

    );
}

export default SignIn;