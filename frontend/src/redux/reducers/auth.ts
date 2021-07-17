import {authState,AUTH_START,AUTH_SUCCESS,AUTH_FAIL,AUTH_LOGOUT, authSuccessInterface, authFailInterface, authStartInterface, 
    authLogoutInterface, AUTH_SIGNUPTWO, AUTH_SIGNUPFOUR, authSignupTwoInterface, authSignupFourInterface} from '../actionTypes/auth';
    import {AppActions} from '../actionTypes/appActions';

import { updateObject } from '../utility';



const authInitialState: authState={
    token:null,
    user_id:null,
    profile_id:null,
    phone_number:null,
    is_online:false,
    error:null,
    loading:false
}

const authStart = (state:authState, action:authStartInterface) => {
    return updateObject(state, {
        token:null,
        user_id:null,
        profile_id:null,
        phone_number:null,
        is_online:false,
        error: null,
        loading: true
    });
}

const authSuccess = (state:authState, action:authSuccessInterface) => {
    return updateObject(state, {
        token: action.token,
        user_id:null,
        profile_id:action.profile_id,
        phone_number:null,
        is_online:action.is_online,
        error: null,
        loading: false
    });
}
const authSignupTwo = (state:authState, action:authSignupTwoInterface) => {
    return updateObject(state, {
        token: null,
        user_id:action.user_id,
        profile_id:null,
        phone_number:null,
        is_online:false,
        error: null,
        loading: false
    });
}
const authSignupFour = (state:authState, action:authSignupFourInterface) => {
    return updateObject(state, {
        token: null,
        user_id:action.user_id,
        profile_id:action.profile_id,
        phone_number:action.phone_number,
        is_online:false,
        error: null,
        loading: false
    });
}

const authFail = (state:authState, action:authFailInterface) => {
    return updateObject(state, {
        token:null,
        user_id:null,
        profile_id:null,
        phone_number:null,
        is_online:false,
        error: action.error,
        loading: false
    });
}

const authLogout = (state:authState, action:authLogoutInterface) => {
    return updateObject(state, {
        token: null,
        user_id:null,
        profile_id:null,
        phone_number:null,
        is_online:false,
        error:null,
        loading:false
    });
}

const authReducer = (state=authInitialState, action:AppActions):authState => {
    switch (action.type) {
        case AUTH_START: return authStart(state, action);
        case AUTH_SUCCESS: return authSuccess(state, action);
        case AUTH_SIGNUPTWO: return authSignupTwo(state, action);
        case AUTH_SIGNUPFOUR: return authSignupFour(state, action);
        case AUTH_FAIL: return authFail(state, action);
        case AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state;
    }
}

export default authReducer;