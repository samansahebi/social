import Axios from '../axios';
import {NOTIFICATIONS_START,NOTIFICATIONS_LOADED,NOTIFICATIONS_FAILED} from '../actionTypes/notifications';
import {AppActions} from '../actionTypes/appActions';
import {Dispatch} from 'redux';

export const notificationsStart = ():AppActions => {
    return {
        type: NOTIFICATIONS_START,
        loading:true
    }
}

export const notificationsLoaded = (notifications:any):AppActions => {
    return {
        type: NOTIFICATIONS_LOADED,
        notifications:notifications,
        loading:true
    }
}

export const notificationsFailed = (error:string):AppActions => {
    return {
        type: NOTIFICATIONS_FAILED,
        error:error,
        loading:true
    }
}

export const myNotifications = (id:number) => {
    return (dispatch:Dispatch<AppActions>) => {
        dispatch(notificationsStart());
        Axios.get('notifications/get/notification/'+id as string + '/')
            .then(res => {
                dispatch(notificationsLoaded(res.data));
            })
            .catch(err => {
                dispatch(notificationsFailed(err))
            })
    }
}
