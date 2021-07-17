import { jobCreateFailedInterface, jobCreateLoadedInterface, jobCreateStartInterface, jobFailedInterface, jobLoadedInterface, jobSearchFailedInterface, jobSearchLoadedInterface, jobSearchStartInterface, jobStartInterface, jobState, JOB_CREATE_FAILED, JOB_CREATE_LOADED, JOB_CREATE_START, JOB_FAILED, JOB_LOADED, JOB_SEARCH_FAILED, JOB_SEARCH_LOADED, JOB_SEARCH_START, JOB_START } from "redux/actionTypes/job";
import {AppActions} from '../actionTypes/appActions';

const jobInitialState:jobState={
   vacancyCreate:{
      organization: '',
      title: '',
      location: '',
      skills_required: '',
      industry: '',
      pay_range: '',
      external_site_url: '',
      employment_type: '',
      description: '',
      file_linked: '',
      is_remote: false,
      posted_by: 0,
    },
   vacancy:[],
   loading:false,
   error:null,
}

const jobStart = (state:jobState, action:jobStartInterface) => {
   return {
       ...state,
       loading:true,
   }
}
const jobLoaded = (state:jobState, action:jobLoadedInterface) => {
   return {
       ...state,
       vacancy:action.vacancy,
       loading:false,
   }
}
const jobFailed = (state:jobState, action:jobFailedInterface) => {
   return {
       ...state,
       error:action.error,
       loading:false,
   }
}
const jobSearchStart = (state:jobState, action:jobSearchStartInterface) => {
   return {
       ...state,
       loading:true,
   }
}
const jobSearchLoaded = (state:jobState, action:jobSearchLoadedInterface) => {
   return {
       ...state,
       vacancy:action.vacancy,
       loading:false,
   }
}
const jobSearchFailed = (state:jobState, action:jobSearchFailedInterface) => {
   return {
       ...state,
       error:action.error,
       loading:false,
   }
}
const jobCreateStart = (state:jobState, action:jobCreateStartInterface) => {
   return {
       ...state,
       loading:true,
   }
}
const jobCreateLoaded = (state:jobState, action:jobCreateLoadedInterface) => {
   return {
       ...state,
       vacancyCreate:action.vacancyCreate,
       loading:false,
   }
}
const jobCreateFailed = (state:jobState, action:jobCreateFailedInterface) => {
   return {
       ...state,
       error:action.error,
       loading:false,
   }
}

const jobReducer = (state=jobInitialState, action:AppActions):jobState => {
   switch (action.type) {
       case JOB_START: return jobStart(state, action);
       case JOB_LOADED: return jobLoaded(state, action);
       case JOB_FAILED: return jobFailed(state, action);
       case JOB_SEARCH_START: return jobSearchStart(state, action);
       case JOB_SEARCH_LOADED: return jobSearchLoaded(state, action);
       case JOB_SEARCH_FAILED: return jobSearchFailed(state, action);
       case JOB_CREATE_START: return jobCreateStart(state, action);
       case JOB_CREATE_LOADED: return jobCreateLoaded(state, action);
       case JOB_CREATE_FAILED: return jobCreateFailed(state, action);

       default:
           return state;
   }
}

export default jobReducer;