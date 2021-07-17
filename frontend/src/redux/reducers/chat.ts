import { chatHistoryFailedInterface, chatHistoryLoadedInterface, chatHistoryStartInterface, 
    chatHistoryState, CHATHISTORY_FAILED, CHATHISTORY_LOADED, CHATHISTORY_START } from "redux/actionTypes/chat";
    import {AppActions} from '../actionTypes/appActions';

const chatHistoryInitialState:chatHistoryState={
  chatHistory:[],
  loading:false,
  error:null,
}

const chatHistoryStart = (state:chatHistoryState, action:chatHistoryStartInterface) => {
  return {
      ...state,
      loading:true,
  }
}
const chatHistoryLoaded = (state:chatHistoryState, action:chatHistoryLoadedInterface) => {
  return {
      ...state,
      chatHistory:action.chatHistory,
      loading:false,
  }
}
const chatHistoryFailed = (state:chatHistoryState, action:chatHistoryFailedInterface) => {
  return {
      ...state,
      error:action.error,
      loading:false,
  }
}

const chatHistoryReducer = (state=chatHistoryInitialState, action:AppActions):chatHistoryState => {
  switch (action.type) {
      case CHATHISTORY_START: return chatHistoryStart(state, action);
      case CHATHISTORY_LOADED: return chatHistoryLoaded(state, action);
      case CHATHISTORY_FAILED: return chatHistoryFailed(state, action);
      default:
          return state;
  }
}

export default chatHistoryReducer;