export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_SIGNUPTWO = 'AUTH_SIGNUPTWO';
export const AUTH_SIGNUPFOUR = 'AUTH_SIGNUPFOUR';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export interface authStartInterface{
    type: typeof AUTH_START,
    loading: boolean
}

export interface authSuccessInterface{
    type: typeof AUTH_SUCCESS,
    token: string,
    profile_id: number|null,
    is_online: boolean,
    loading: boolean
}
export interface authSignupTwoInterface{
    type: typeof AUTH_SIGNUPTWO,
    user_id: number|null,
    loading: boolean
}
export interface authSignupFourInterface{
    type: typeof AUTH_SIGNUPFOUR,
    user_id: number|null,
    profile_id: number|null,
    phone_number: number| null,
    loading: boolean
}

export interface authFailInterface{
    type: typeof AUTH_FAIL,
    loading:boolean,
    error: string
}

export interface authLogoutInterface{
    type: typeof AUTH_LOGOUT
}

export interface authState {
    token: string | null,
    phone_number: number| null,
    user_id: number | null,
    profile_id: number|null,
    is_online: boolean,
    error: string| null,
    loading: boolean
}

export type authActions = 
|authSignupFourInterface
|authSignupTwoInterface
|authStartInterface
|authSuccessInterface
|authFailInterface
|authLogoutInterface