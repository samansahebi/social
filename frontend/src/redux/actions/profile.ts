import Axios from '../axios';
import {PROFILE_START,PROFILE_LOADED,PROFILE_FAILED, BANNER_LOADED, BANNER_FAILED, BANNER_START} from '../actionTypes/profile';
import {AppActions} from '../actionTypes/appActions';
import {Dispatch} from 'redux';

export const profileStart = ():AppActions => {
    return {
        type: PROFILE_START,
        loading:true
    }
}

export const profileLoaded = (info:any):AppActions => {
    return {
        type: PROFILE_LOADED,
        dashboard:info,
        loading:true
    }
}

export const profileFailed = (error:string):AppActions => {
    return {
        type: PROFILE_FAILED,
        error:error,
        loading:true
    }
}
export const bannerStart = ():AppActions => {
    return {
        type: BANNER_START,
        loading:true
    }
}
export const bannerLoaded = (banner:any):AppActions => {
    return {
        type: BANNER_LOADED,
        banner:banner,
        loading:true
    }
}
export const bannerFailed = (error:string):AppActions => {
    return {
        type: BANNER_FAILED,
        error:error,
        loading:true
    }
}
export const profileInfo = () => {
    return (dispatch:Dispatch<AppActions>) => {
        dispatch(profileStart());
        Axios.get('user/info/')
            .then(res => {
                dispatch(profileLoaded(res.data));
            })
            .catch(err => {
                dispatch(profileFailed(err))
            })
    }
}

export const profileBanner = (profile_id:number) => {
    return (dispatch:Dispatch<AppActions>) => {
        dispatch(bannerStart());
        Axios.get('user/profile/banner/'+profile_id as string)
            .then(res => {
                dispatch(bannerLoaded(res.data));
            })
            .catch(err => {
                dispatch(bannerFailed(err))
            })
    }
}
