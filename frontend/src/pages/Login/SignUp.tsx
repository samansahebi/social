import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { authSignupOne } from 'redux/actions/auth';
import { Link, useHistory } from "react-router-dom";

const SignUp:React.FC=()=> {
    const dispatch = useDispatch();
    const user_id= useSelector((state:AppState)=>state.auth.user_id)
    const history = useHistory();

    interface initialStateI{
      email:any,
      password: any,
      password2: any,
    }
    const initialState = {
        email: null,
        password: null,
        password2:null,
    }
    if (user_id){
        history.push('/SignUp2')
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
        if(formData.password===formData.password2){
            dispatch(authSignupOne(formData.email, formData.password))
        }

    }
    return (
            <div className="form-body">
            <div className="row">
                <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                    <div className="website-logo-inside">
                        <a href="index.html">
                        <div className="logo">
                            {/* <img className="logo-size" src="../../assets/logo.svg" /> */}
                        </div>
                        </a>
                    </div>
                    <h3>سامانه ارتباطی منشور</h3>
                    <p>جایی برای برقراری ارتباط و کسب درآمد</p>
                    <div className="page-links">
                        <Link to={'/'} >ورود</Link><div className="active">ثبت نام</div>
                    </div>
                    <form>
                        <input className="form-control text-left" type="text" name="email" placeholder="E-mail Address" onChange={handleChange} required />
                        <input className="form-control text-left" type="password" name="password" placeholder="Password" onChange={handleChange} required />
                        <input className="form-control text-left" type="password" name="password2" placeholder="Password" onChange={handleChange} required />
                        <div className="form-button">
                        <button id="submit" type="submit" onClick={handleClick} className="ibtn">ثبت نام</button>
                        </div>
                    </form>
                    {/* <div className="other-links">
                        <span>Or login with</span><a href="#">Facebook</a><a href="#">Google</a><a href="#">Linkedin</a>
                    </div> */}
                    </div>
                </div>
                </div>
            </div>
            </div>

    );
}

export default SignUp;