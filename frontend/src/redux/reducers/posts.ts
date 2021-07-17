import { commentFailedInterface, commentLoadedInterface, commentStartInterface, COMMENT_FAILED, COMMENT_LOADED, COMMENT_START, feedFailedInterface, feedLoadedInterface, feedStartInterface, feedState, 
    FEED_FAILED, FEED_LOADED, FEED_START, voteFailedInterface, voteLoadedInterface, voteStartInterface, VOTE_FAILED, VOTE_LOADED, VOTE_START } from "redux/actionTypes/posts";
import {AppActions} from '../actionTypes/appActions';

const feedInitialState:feedState={
    postCreate: {
        text:'',
        media_type:'',
        media:'',
        author_id:0,
        author_name:'',
      },
    posts:[],
    voteStatus:'',
    loading:false,
    error:null,
}

const feedStart = (state:feedState, action:feedStartInterface) => {
    return {
        ...state,
        loading:true,
    }
}
const feedLoaded = (state:feedState, action:feedLoadedInterface) => {
    return {
        ...state,
        posts:action.posts,
        loading:false,
    }
}
const feedFailed = (state:feedState, action:feedFailedInterface) => {
    return {
        ...state,
        error:action.error,
        loading:false,
    }
}
const voteStart = (state:feedState, action:voteStartInterface) => {
    return {
        ...state,
        loading:true,
    }
}
const voteLoaded = (state:feedState, action:voteLoadedInterface) => {
    return {
        ...state,
        voteStatus:action.voteStatus,
        loading:false,
    }
}
const voteFailed = (state:feedState, action:voteFailedInterface) => {
    return {
        ...state,
        error:action.error,
        loading:false,
    }
}
const commentStart = (state:feedState, action:commentStartInterface) => {
    return {
        ...state,
        loading:true,
    }
}
const commentLoaded = (state:feedState, action:commentLoadedInterface) => {
    return {
        ...state,
        comments:action.comments,
        loading:false,
    }
}
const commentFailed = (state:feedState, action:commentFailedInterface) => {
    return {
        ...state,
        error:action.error,
        loading:false,
    }
}
const feedReducer = (state=feedInitialState, action:AppActions):feedState => {
    switch (action.type) {
        case FEED_START: return feedStart(state, action);
        case FEED_LOADED: return feedLoaded(state, action);
        case FEED_FAILED: return feedFailed(state, action);
        case VOTE_START: return voteStart(state, action);
        case VOTE_LOADED: return voteLoaded(state, action);
        case VOTE_FAILED: return voteFailed(state, action);
        case COMMENT_START: return commentStart(state, action);
        case COMMENT_LOADED: return commentLoaded(state, action);
        case COMMENT_FAILED: return commentFailed(state, action);
        default:
            return state;
    }
}

export default feedReducer;