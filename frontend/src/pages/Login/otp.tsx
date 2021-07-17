import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { OTP as OTP_Verify } from 'redux/actions/auth';
import { useHistory } from 'react-router-dom';

const OTP:React.FC=()=> {
    const dispatch = useDispatch();
    const phone_number = useSelector((state:AppState)=>state.auth.phone_number)
    const profile_id = useSelector((state:AppState)=>state.auth.profile_id)
    const token = useSelector((state:AppState)=>state.auth.token)
    const history= useHistory();

    if(token){
        history.push('/dashboard')
    }
    interface initialStateI{
      otp:number,
    }
    const initialState = {
        otp: 0,
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
        dispatch(OTP_Verify(formData.otp,phone_number,profile_id ))
    }
    return (
            <div className="form-body">
            <div className="row">
                <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                    <p>کد تایید ارسال شده به ایمیل خود را وارد کنید</p>

                    <form>
                        <input className="form-control text-left" type="text" name="otp" placeholder="OTP" onChange={handleChange} required />
                        <div className="form-button">
                        <button id="submit" type="submit" onClick={handleClick} className="ibtn">ورود</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>

    );
}

export default OTP;