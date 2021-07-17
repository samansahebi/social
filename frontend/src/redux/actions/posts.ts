import Axios from '../axios';
import {FEED_START,FEED_LOADED,FEED_FAILED, VOTE_LOADED, VOTE_FAILED, VOTE_START, COMMENT_FAILED, COMMENT_LOADED, COMMENT_START, 
    REPLY_FAILED, REPLY_LOADED, REPLY_START } from '../actionTypes/posts';
import {AppActions} from '../actionTypes/appActions';

import {Dispatch} from 'redux'

export const feedStart = ():AppActions => {
    return {
        type: FEED_START,
        loading:true
    }
}

export const feedLoaded = (posts:any):AppActions => {
    return {
        type: FEED_LOADED,
        posts:posts,
        loading:true
    }
}

export const feedFailed = (error:string):AppActions => {
    return {
        type: FEED_FAILED,
        error:error,
        loading:true
    }
}
export const voteStart = ():AppActions => {
    return {
        type: VOTE_START,
        loading:true
    }
}
export const voteLoaded = (vote:any):AppActions => {
    return {
        type: VOTE_LOADED,
        voteStatus:vote,
        loading:true
    }
}
export const voteFailed = (error:string):AppActions => {
    return {
        type: VOTE_FAILED,
        error:error,
        loading:true
    }
}
export const commentStart = ():AppActions => {
    return {
        type: COMMENT_START,
        loading:true
    }
}
export const commentLoaded = (comments:any):AppActions => {
    return {
        type: COMMENT_LOADED,
        comments:comments,
        loading:true
    }
}
export const commentFailed = (error:string):AppActions => {
    return {
        type: COMMENT_FAILED,
        error:error,
        loading:true
    }
}
export const replyStart = ():AppActions => {
    return {
        type: REPLY_START,
        loading:true
    }
}
export const replyLoaded = (replys:any):AppActions => {
    return {
        type: REPLY_LOADED,
        replys:replys,
        loading:true
    }
}
export const replyFailed = (error:string):AppActions => {
    return {
        type: REPLY_FAILED,
        error:error,
        loading:true
    }
}
export const feed = () => {
    return (dispatch:Dispatch<AppActions>) => {
        dispatch(feedStart());
        Axios.get('user/post/feed/')
            .then(res => {
                dispatch(feedLoaded(res.data));
            })
            .catch(err => {
                dispatch(feedFailed(err))
            })
    }
}
export const vote = (post_id:number,vote_type:string,vote_id:number) => {
    return (dispatch:Dispatch<AppActions>) => {
        dispatch(voteStart());
        Axios.post('user/post/vote/'+post_id as string+'/'+vote_type+'/',{
            vote:vote_id
        })
            .then(res => {
                dispatch(voteLoaded(res.data));
            })
            .catch(err => {
                dispatch(voteFailed(err))
            })
    }
}
export const commentSend = (post:number,text:string,commented_by:number) => {
    return (dispatch:Dispatch<AppActions>) => {
        dispatch(commentStart());
        Axios.post('user/post/comment/create/',{
            text:text,
            post:post,
            commented_by:commented_by,
        })
            .then(res => {
                dispatch(commentLoaded(res.data));
            })
            .catch(err => {
                dispatch(commentFailed(err))
            })
    }
}
