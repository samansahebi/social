import { bannerFailedInterface, bannerLoadedInterface, bannerStartInterface, BANNER_FAILED, BANNER_LOADED,
    BANNER_START,
      profileFailedInterface, profileLoadedInterface, profileStartInterface, profileState, PROFILE_FAILED,
      PROFILE_LOADED, PROFILE_START } from "redux/actionTypes/profile";
      import {AppActions} from '../actionTypes/appActions';

const profileInitialState:profileState={
    dashboard:{user_name:'',user_avatar:'',user_tagline:'',connection:0,bookmarks:0},
    banner:{avatar: '',
            first_name: '',
            last_name: '',
            location: '',
            background: '',
            tagline: '',
            experience: [],
            volunteer_experience: [],
            certifications:[],
            project:[],
            course:[],
            test:[],
            skills:{id:0,skills_list:'',top_skills:'',user:0,endorsed_by:[]},
            connection: 0,
            profile_views: 0,
            bookmarked_posts: 0,
            about: '',
            is_connected: false,
            is_pending: false,
            connection_id: 0},
    loading:false,
    error:null,
}

const profileStart = (state:profileState, action:profileStartInterface) => {
    return {
        ...state,
        loading:true,
    }
}
const profileLoaded = (state:profileState, action:profileLoadedInterface) => {
    return {
        ...state,
        dashboard:action.dashboard,
        loading:false,
    }
}
const profileFailed = (state:profileState, action:profileFailedInterface) => {
    return {
        ...state,
        error:action.error,
        loading:false,
    }
}
const bannerStart = (state:profileState, action:bannerStartInterface) => {
    return {
        ...state,
        loading:true,
    }
}
const bannerLoaded = (state:profileState, action:bannerLoadedInterface) => {
    return {
        ...state,
        banner:action.banner,
        loading:false,
    }
}
const bannerFailed = (state:profileState, action:bannerFailedInterface) => {
    return {
        ...state,
        error:action.error,
        loading:false,
    }
}
const profileReducer = (state=profileInitialState, action:AppActions):profileState => {
    switch (action.type) {
        case PROFILE_START: return profileStart(state, action);
        case PROFILE_LOADED: return profileLoaded(state, action);
        case PROFILE_FAILED: return profileFailed(state, action);
        case BANNER_START: return bannerStart(state, action);
        case BANNER_LOADED: return bannerLoaded(state, action);
        case BANNER_FAILED: return bannerFailed(state, action);
        default:
            return state;
    }
}

export default profileReducer;