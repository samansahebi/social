import Axios from '../axios';
import {HASHTAG_START,HASHTAG_LOADED,HASHTAG_FAILED} from '../actionTypes/hashtags';
import {AppActions} from '../actionTypes/appActions';
import {Dispatch} from 'redux';

export const hashtagStart = ():AppActions => {
    return {
        type: HASHTAG_START,
        loading:true
    }
}

export const hashtagLoaded = (hashtag:any):AppActions => {
    return {
        type: HASHTAG_LOADED,
        hashtag:hashtag,
        loading:true
    }
}

export const hashtagFailed = (error:string):AppActions => {
    return {
        type: HASHTAG_FAILED,
        error:error,
        loading:true
    }
}


export const hashtag = () => {
    return (dispatch:Dispatch<AppActions>) => {
        dispatch(hashtagStart());
        Axios.get('user/post/hashtags/')
            .then(res => {
                dispatch(hashtagLoaded(res.data));
            })
            .catch(err => {
                dispatch(hashtagFailed(err))
            })
    }
}


