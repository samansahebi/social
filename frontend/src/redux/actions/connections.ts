import Axios from '../axios';
import {SOCIALPROFILE_START,SOCIALPROFILE_LOADED,SOCIALPROFILE_FAILED, CONNECTIONREQUEST_SUCCESS, CONNECTIONREQUEST_START, CONNECTIONREQUEST_FAILED, PENDINGCONNECTION_START, PENDINGCONNECTION_LOADED, PENDINGCONNECTION_FAILED, DELETECONNECTION_START, DELETECONNECTION_SUCCESS, DELETECONNECTION_FAILED} from '../actionTypes/connections';
import {AppActions} from '../actionTypes/appActions';

import {Dispatch} from 'redux';

export const socialprofileStart = ():AppActions => {
    return {
        type: SOCIALPROFILE_START,
        loading:true
    }
}

export const socialprofileLoaded = (socialprofile:any):AppActions => {
    return {
        type: SOCIALPROFILE_LOADED,
        socialprofile:socialprofile,
        loading:true
    }
}

export const socialprofileFailed = (error:string):AppActions => {
    return {
        type: SOCIALPROFILE_FAILED,
        error:error,
        loading:true
    }
}
export const connectionRequestStart = ():AppActions => {
    return {
        type: CONNECTIONREQUEST_START,
        loading:true
    }
}
export const connectionRequestSuccess = (connectionStatus:string):AppActions => {
    return {
        type: CONNECTIONREQUEST_SUCCESS,
        connectionStatus:connectionStatus,
        loading:true
    }
}
export const connectionRequestFailed = (error:string):AppActions => {
    return {
        type: CONNECTIONREQUEST_FAILED,
        error:error,
        loading:true
    }
}
export const pendingConnectionsStart = ():AppActions => {
    return {
        type: PENDINGCONNECTION_START,
        loading:true
    }
}
export const pendingConnectionsLoaded = (connectionList:any[]):AppActions => {
    return {
        type: PENDINGCONNECTION_LOADED,
        connectionList:connectionList,
        loading:true
    }
}
export const pendingConnectionsFailed = (error:string):AppActions => {
    return {
        type: PENDINGCONNECTION_FAILED,
        error:error,
        loading:true
    }
}
export const deleteConnectionStart = ():AppActions => {
    return {
        type: DELETECONNECTION_START,
        loading:true
    }
}
export const deleteConnectionSuccess = (connectionStatus:string):AppActions => {
    return {
        type: DELETECONNECTION_SUCCESS,
        connectionStatus:connectionStatus,
        loading:true
    }
}
export const deleteConnectionFailed = (error:string):AppActions => {
    return {
        type: DELETECONNECTION_FAILED,
        error:error,
        loading:true
    }
}
export const socialprofile = () => {
    return (dispatch:Dispatch<AppActions>) => {
        dispatch(socialprofileStart());
        Axios.get('user/profile/view/social_profile/')
            .then(res => {
                dispatch(socialprofileLoaded(res.data));
            })
            .catch(err => {
                dispatch(socialprofileFailed(err))
            })
    }
}

export const connectionRequest = (id:number) => {
    return (dispatch:Dispatch<AppActions>) => {
        dispatch(connectionRequestStart());
        Axios.post('user/network/send/connection/'+id as string+'/')
            .then(res => {
                dispatch(connectionRequestSuccess(res.data));
            })
            .catch(err => {
                dispatch(connectionRequestFailed(err))
            })
    }
}

export const pendingConnections = (filter:string) => {
    return (dispatch:Dispatch<AppActions>) => {
        dispatch(pendingConnectionsStart());
        Axios.get('user/network/view/pending_connection/',{
            params:{filter: filter}
        })
            .then(res => {
                dispatch(pendingConnectionsLoaded(res.data));
            })
            .catch(err => {
                dispatch(pendingConnectionsFailed(err))
            })
    }
}
export const deleteConnection = (connection_id:number) => {
    return (dispatch:Dispatch<AppActions>) => {
        dispatch(deleteConnectionStart());
        Axios.get('user/network/delete/connection/'+ connection_id as string + '/')
            .then(res => {
                dispatch(deleteConnectionSuccess(res.data));
            })
            .catch(err => {
                dispatch(deleteConnectionFailed(err))
            })
    }
}

