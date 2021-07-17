export const SOCIALPROFILE_START =  'SOCIALPROFILE_START';
export const SOCIALPROFILE_LOADED =  'SOCIALPROFILE_LOADED';
export const SOCIALPROFILE_FAILED =  'SOCIALPROFILE_FAILED';
export const CONNECTIONREQUEST_START =  'CONNECTIONREQUEST_START';
export const CONNECTIONREQUEST_SUCCESS =  'CONNECTIONREQUEST_SUCCESS';
export const CONNECTIONREQUEST_FAILED =  'CONNECTIONREQUEST_FAILED';
export const DELETECONNECTION_START =  'DELETECONNECTION_START';
export const DELETECONNECTION_SUCCESS =  'DELETECONNECTION_SUCCESS';
export const DELETECONNECTION_FAILED =  'DELETECONNECTION_FAILED';
export const PENDINGCONNECTION_START =  'PENDINGCONNECTION_START';
export const PENDINGCONNECTION_LOADED =  'PENDINGCONNECTION_LOADED';
export const PENDINGCONNECTION_FAILED =  'PENDINGCONNECTION_FAILED';

export interface socialprofileStartInterface{
    type: typeof SOCIALPROFILE_START,
    loading: boolean
}

export interface socialprofileLoadedInterface{
    type: typeof SOCIALPROFILE_LOADED,
    socialprofile: Array<socialprofileInterface>,
    loading: boolean
}

export interface socialprofileFailedInterface{
    type: typeof SOCIALPROFILE_FAILED,
    error: any,
    loading: boolean
}

export interface socialprofileInterface{
    id: number,
    bio: string,
    tagline: string,
    background_photo: string,
    dob: string,
    profile_url: string,
    is_private: boolean,
    completely_private: boolean,
    semi_private: boolean,
    user: number,
    current_industry: string,
    current_academia: string,
    viewer_list: number[],
    first_name:string,
    last_name:string,
    avatar:string,
  }
  export interface connectionRequestStartInterface{
    type: typeof CONNECTIONREQUEST_START,
    loading: boolean
}
  export interface connectionRequestSuccessInterface{
    type: typeof CONNECTIONREQUEST_SUCCESS,
    connectionStatus: string,
    loading: boolean
}
export interface connectionRequestFailedInterface{
  type: typeof CONNECTIONREQUEST_FAILED,
  error: any,
  loading: boolean
}
  export interface deleteConnectionStartInterface{
    type: typeof DELETECONNECTION_START,
    loading: boolean
}
  export interface deleteConnectionSuccessInterface{
    type: typeof DELETECONNECTION_SUCCESS,
    connectionStatus: string,
    loading: boolean
}
export interface deleteConnectionFailedInterface{
  type: typeof DELETECONNECTION_FAILED,
  error: any,
  loading: boolean
}
export interface pendingConnectionsStartInterface{
  type: typeof PENDINGCONNECTION_START,
  loading: boolean
}
export interface pendingConnectionsLoadedInterface{
    type: typeof PENDINGCONNECTION_LOADED,
    connectionList: Array<connectionListI>,
    loading: boolean
}
export interface pendingConnectionsFailedInterface{
  type: typeof PENDINGCONNECTION_FAILED,
  error: any,
  loading: boolean
}
  export interface connectionListI {
    connection_id: number,
    profile_id: number,
    connection_name: string,
    connection_avatar: string,
    connection_tagline: string,
    time_elapsed: string
}
  export interface socialprofileState {
    socialprofile:Array<socialprofileInterface>,
    connectionStatus:string,
    connectionList:Array<connectionListI>
    loading:boolean,
    error:string|null,
}

export type socialprofileActions = 
|socialprofileStartInterface
|socialprofileLoadedInterface
|socialprofileFailedInterface
|connectionRequestStartInterface
|connectionRequestSuccessInterface
|connectionRequestFailedInterface
|deleteConnectionStartInterface
|deleteConnectionSuccessInterface
|deleteConnectionFailedInterface
|pendingConnectionsStartInterface
|pendingConnectionsLoadedInterface
|pendingConnectionsFailedInterface