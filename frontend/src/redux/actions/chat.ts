import Axios from '../axios';
import {CHATHISTORY_START,CHATHISTORY_LOADED,CHATHISTORY_FAILED} from '../actionTypes/chat';
import {AppActions} from '../actionTypes/appActions';
import {Dispatch} from 'redux';

export const chatHistoryStart = ():AppActions => {
    return {
        type: CHATHISTORY_START,
        loading:true
    }
}

export const chatHistoryLoaded = (chatHistory:any):AppActions => {
    return {
        type: CHATHISTORY_LOADED,
        chatHistory:chatHistory,
        loading:true
    }
}

export const chatHistoryFailed = (error:string):AppActions => {
    return {
        type: CHATHISTORY_FAILED,
        error:error,
        loading:true
    }
}

export const chatHistory = (id:number) => {
    return (dispatch:Dispatch<AppActions>) => {
        dispatch(chatHistoryStart());
        Axios.get('notifications/get/notification/'+id as string + '/')
            .then(res => {
                dispatch(chatHistoryLoaded(res.data));
            })
            .catch(err => {
                dispatch(chatHistoryFailed(err))
            })
    }
}
