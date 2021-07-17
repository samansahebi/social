import Axios from '../axios';
import {AUTH_START,AUTH_SUCCESS,AUTH_FAIL,AUTH_LOGOUT,AUTH_SIGNUPTWO,AUTH_SIGNUPFOUR} from '../actionTypes/auth';
import {AppActions} from '../actionTypes/appActions';
import {Dispatch} from 'redux'


export const authStart = ():AppActions => {
    return {
        type: AUTH_START,
        loading:true
    }
}

export const authSuccess = (token:string,profile_id:number|null):AppActions => {
    return {
        type: AUTH_SUCCESS,
        token: token,
        profile_id:profile_id,
        is_online:true,
        loading:false
    }
}

export const authSignupTwo = (user_id:number):AppActions => {
    return {
        type: AUTH_SIGNUPTWO,
        user_id:user_id,
        loading:false
    }
}
export const authSignupFour = (user_id:number,profile_id:number,phone_number:number):AppActions => {
    return {
        type: AUTH_SIGNUPFOUR,
        user_id:user_id,
        profile_id:profile_id,
        phone_number:phone_number,
        loading:false
    }
}

export const authFail = (error:string):AppActions => {
    return {
        type: AUTH_FAIL,
        error: error,
        loading:false
    }
}

export const logout = ():AppActions => {
    localStorage.removeItem('token');
    return {
        type: AUTH_LOGOUT
    }
}

export const authLogin = (email:string, password:string) => {
    return (dispatch:Dispatch<AppActions>) => {
        dispatch(authStart());
        Axios.post('user/login/', {
            email: email,
            password: password
        })
            .then(res => {
                localStorage.setItem('token', res.data.access);
                localStorage.setItem('refresh', res.data.refresh);
                dispatch(authSuccess(res.data.access,res.data.profile_id));
            })
            .catch(err => {
                dispatch(authFail(err))
            })
    }
}

export const authSignupOne = (email:string, password:string) => {
    return (dispatch:Dispatch<AppActions>) => {
        dispatch(authStart());
        Axios.post('user/create/', {email: email, password: password,})
        .then(response=>{
        dispatch(authSignupTwo(response.data.id))
        })
        .catch(err=>{
            dispatch(authFail(err))
        })
    }
}
export const authSignupThree = (user_id:any,avatar:any,first_name:string,last_name:string,location:string,phone_number:number) => {
    return (dispatch:Dispatch<AppActions>) => {
        dispatch(authStart());
        Axios.post('user/create/profile/'+user_id as string+'/', {
            avatar:avatar,
            first_name: first_name, 
            last_name: last_name,
            location:location,
            phone_number:phone_number,
        })
        .then(response=>{
            dispatch(authSignupFour(response.data.user,response.data.id,response.data.phone_number))
        })
        .catch(err=>{
            dispatch(authFail(err))
        })
    }
}
export const OTP = (otp:number,phone_number:number|null,profile_id:number|null) => {
    return (dispatch:Dispatch<AppActions>) => {
        dispatch(authStart());
        Axios.post('user/account/verify/', {
            otp:otp,
            phone_number:phone_number,
        })
        .then(response=>{
            localStorage.setItem('token', response.data.access);
            localStorage.setItem('refresh', response.data.refresh);
            dispatch(authSuccess(response.data.access,profile_id))
        })
        .catch(err=>{
            dispatch(authFail(err))
        })
    }
}

export const authCheckState = () => {
    return (dispatch:Dispatch<AppActions>) => {
        const token:any = localStorage.getItem('token');
        const profile_id:any = localStorage.getItem('profile_id');
        if (token === undefined) {
            dispatch(logout());
        } else {
            dispatch(authSuccess(token,profile_id));
        }
    }
}
