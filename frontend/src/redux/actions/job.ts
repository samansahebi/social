import Axios from '../axios';
import {JOB_START,JOB_LOADED,JOB_FAILED, JOB_CREATE_START, JOB_CREATE_LOADED, JOB_CREATE_FAILED, JOB_SEARCH_FAILED, JOB_SEARCH_LOADED, JOB_SEARCH_START } from '../actionTypes/job';
import {AppActions} from '../actionTypes/appActions';
import {Dispatch} from 'redux';

export const jobStart = ():AppActions => {
    return {
        type: JOB_START,
        loading:true
    }
}

export const jobLoaded = (vacancy:any):AppActions => {
    return {
        type: JOB_LOADED,
        vacancy:vacancy,
        loading:true
    }
}

export const jobFailed = (error:string):AppActions => {
    return {
        type: JOB_FAILED,
        error:error,
        loading:true
    }
}
export const jobSearchStart = ():AppActions => {
    return {
        type: JOB_SEARCH_START,
        loading:true
    }
}

export const jobSearchLoaded = (vacancy:any):AppActions => {
    return {
        type: JOB_SEARCH_LOADED,
        vacancy:vacancy,
        loading:true
    }
}

export const jobSearchFailed = (error:string):AppActions => {
    return {
        type: JOB_SEARCH_FAILED,
        error:error,
        loading:true
    }
}
export const jobCreateStart = ():AppActions => {
    return {
        type: JOB_CREATE_START,
        loading:true
    }
}

export const jobCreateLoaded = (vacancyCreate:any):AppActions => {
    return {
        type: JOB_CREATE_LOADED,
        vacancyCreate:vacancyCreate,
        loading:true
    }
}

export const jobCreateFailed = (error:string):AppActions => {
    return {
        type: JOB_CREATE_FAILED,
        error:error,
        loading:true
    }
}

export const jobRecommended = () => {
    return (dispatch:Dispatch<AppActions>) => {
        dispatch(jobStart());
        Axios.get('user/profile/view/recommended/vacancy/')
            .then(res => {
                dispatch(jobLoaded(res.data));
            })
            .catch(err => {
                dispatch(jobFailed(err))
            })
    }
}
export const jobSearch = () => {
    return (dispatch:Dispatch<AppActions>) => {
        dispatch(jobStart());
        Axios.get('user/profile/view/recommended/vacancy/')
            .then(res => {
                dispatch(jobLoaded(res.data));
            })
            .catch(err => {
                dispatch(jobFailed(err))
            })
    }
}
export const jobCreate = ({organization,title,location,skills_required,industry,pay_range,external_site_url,employment_type,description,file_linked,is_remote,posted_by}) => {
    return (dispatch:Dispatch<AppActions>) => {
        dispatch(jobCreateStart());
        Axios.post('user/profile/vacancy/',{
            organization: organization,
            title: title,
            location: location,
            skills_required: skills_required,
            industry: industry,
            pay_range: pay_range,
            external_site_url: external_site_url,
            employment_type: employment_type,
            description: description,
            file_linked: file_linked,
            is_remote: is_remote,
            posted_by: posted_by,
        })
            .then(res => {
                dispatch(jobCreateLoaded(res.data));
            })
            .catch(err => {
                dispatch(jobCreateFailed(err))
            })
    }
}
