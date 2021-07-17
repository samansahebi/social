import { hashtagFailedInterface, hashtagLoadedInterface, hashtagStartInterface, hashtagState,
     HASHTAG_FAILED, HASHTAG_LOADED, HASHTAG_START } from "redux/actionTypes/hashtags";
     import {AppActions} from '../actionTypes/appActions';

const hashtagInitialState:hashtagState={
   hashtag:[],
   loading:false,
   error:null,
}

const hashtagStart = (state:hashtagState, action:hashtagStartInterface) => {
   return {
       ...state,
       loading:true,
   }
}
const hashtagLoaded = (state:hashtagState, action:hashtagLoadedInterface) => {
   return {
       ...state,
       hashtag:action.hashtag,
       loading:false,
   }
}
const hashtagFailed = (state:hashtagState, action:hashtagFailedInterface) => {
   return {
       ...state,
       error:action.error,
       loading:false,
   }
}

const hashtagReducer = (state=hashtagInitialState, action:AppActions):hashtagState => {
   switch (action.type) {
       case HASHTAG_START: return hashtagStart(state, action);
       case HASHTAG_LOADED: return hashtagLoaded(state, action);
       case HASHTAG_FAILED: return hashtagFailed(state, action);
       default:
           return state;
   }
}

export default hashtagReducer;