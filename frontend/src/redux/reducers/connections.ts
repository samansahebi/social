import { connectionRequestFailedInterface, connectionRequestStartInterface, connectionRequestSuccessInterface, CONNECTIONREQUEST_FAILED, 
   CONNECTIONREQUEST_START, CONNECTIONREQUEST_SUCCESS, deleteConnectionFailedInterface, deleteConnectionStartInterface, deleteConnectionSuccessInterface, DELETECONNECTION_FAILED, DELETECONNECTION_START, DELETECONNECTION_SUCCESS, pendingConnectionsFailedInterface,  pendingConnectionsLoadedInterface, 
   pendingConnectionsStartInterface, PENDINGCONNECTION_FAILED, PENDINGCONNECTION_LOADED, PENDINGCONNECTION_START, 
   socialprofileFailedInterface, socialprofileLoadedInterface, socialprofileStartInterface, socialprofileState, 
   SOCIALPROFILE_FAILED, SOCIALPROFILE_LOADED, SOCIALPROFILE_START } from "redux/actionTypes/connections";
   import {AppActions} from '../actionTypes/appActions';

const socialprofileInitialState:socialprofileState={
   socialprofile:[],
   connectionStatus:'',
   connectionList:[],
   loading:false,
   error:null,
}

const socialprofileStart = (state:socialprofileState, action:socialprofileStartInterface) => {
   return {
       ...state,
       loading:true,
   }
}
const socialprofileLoaded = (state:socialprofileState, action:socialprofileLoadedInterface) => {
   return {
       ...state,
       socialprofile:action.socialprofile,
       loading:false,
   }
}
const socialprofileFailed = (state:socialprofileState, action:socialprofileFailedInterface) => {
   return {
       ...state,
       error:action.error,
       loading:false,
   }
}
const connectionRequestStart = (state:socialprofileState, action:connectionRequestStartInterface) => {
   return {
       ...state,
       loading:true,
   }
}
const connectionRequestSuccess = (state:socialprofileState, action:connectionRequestSuccessInterface) => {
   return {
       ...state,
       connectionStatus:action.connectionStatus,
       loading:false,
   }
}
const connectionRequestFailed = (state:socialprofileState, action:connectionRequestFailedInterface) => {
   return {
       ...state,
       error:action.error,
       loading:false,
   }
}
const pendingConnectionsStart = (state:socialprofileState, action:pendingConnectionsStartInterface) => {
   return {
       ...state,
       loading:true,
   }
}
const pendingConnectionsLoaded = (state:socialprofileState, action:pendingConnectionsLoadedInterface) => {
   return {
       ...state,
       connectionList:action.connectionList,
       loading:false,
   }
}
const pendingConnectionsFailed = (state:socialprofileState, action:pendingConnectionsFailedInterface) => {
   return {
       ...state,
       error:action.error,
       loading:false,
   }
}
const deleteConnectionStart = (state:socialprofileState, action:deleteConnectionStartInterface) => {
   return {
       ...state,
       loading:true,
   }
}
const deleteConnectionSuccess = (state:socialprofileState, action:deleteConnectionSuccessInterface) => {
   return {
       ...state,
       connectionStatus:action.connectionStatus,
       loading:false,
   }
}
const deleteConnectionFailed = (state:socialprofileState, action:deleteConnectionFailedInterface) => {
   return {
       ...state,
       error:action.error,
       loading:false,
   }
}
const connectionsReducer = (state=socialprofileInitialState, action:AppActions):socialprofileState => {
   switch (action.type) {
       case SOCIALPROFILE_START: return socialprofileStart(state, action);
       case SOCIALPROFILE_LOADED: return socialprofileLoaded(state, action);
       case SOCIALPROFILE_FAILED: return socialprofileFailed(state, action);
       case CONNECTIONREQUEST_START: return connectionRequestStart(state, action);
       case CONNECTIONREQUEST_SUCCESS: return connectionRequestSuccess(state, action);
       case CONNECTIONREQUEST_FAILED: return connectionRequestFailed(state, action);
       case DELETECONNECTION_START: return deleteConnectionStart(state, action);
       case DELETECONNECTION_SUCCESS: return deleteConnectionSuccess(state, action);
       case DELETECONNECTION_FAILED: return deleteConnectionFailed(state, action);
       case PENDINGCONNECTION_START: return pendingConnectionsStart(state, action);
       case PENDINGCONNECTION_LOADED: return pendingConnectionsLoaded(state, action);
       case PENDINGCONNECTION_FAILED: return pendingConnectionsFailed(state, action);

       default:
           return state;
   }
}

export default connectionsReducer;