export const FEED_START = 'FEED_START';
export const FEED_LOADED = 'FEED_LOADED';
export const FEED_FAILED = 'FEED_FAILED';
export const POST_CREATE_START = 'POST_CREATE_START';
export const POST_CREATE_LOADED = 'POST_CREATE_LOADED';
export const POST_CREATE_FAILED = 'POST_CREATE_FAILED';
export const BOOKMARK_CREATE_START = 'BOOKMARK_CREATE_START';
export const BOOKMARK_CREATE_SUCCESS = 'BOOKMARK_CREATE_SUCCESS';
export const BOOKMARK_CREATE_FAILED = 'BOOKMARK_CREATE_FAILED';
export const POST_SEARCH_START = 'POST_SEARCH_START';
export const POST_SEARCH_LOADED = 'POST_SEARCH_LOADED';
export const POST_SEARCH_FAILED = 'POST_SEARCH_FAILED';
export const VOTE_START =  'VOTE_START';
export const VOTE_LOADED =  'VOTE_LOADED';
export const VOTE_FAILED =  'VOTE_FAILED';
export const COMMENT_START =  'COMMENT_START';
export const COMMENT_LOADED =  'COMMENT_LOADED';
export const COMMENT_FAILED =  'COMMENT_FAILED';
export const REPLY_START =  'REPLY_START';
export const REPLY_LOADED =  'REPLY_LOADED';
export const REPLY_FAILED =  'REPLY_FAILED';

export interface feedStartInterface{
    type: typeof FEED_START,
    loading: boolean
}
export interface feedLoadedInterface{
    type: typeof FEED_LOADED,
    posts: Array<postInterface>,
    loading: boolean
}
export interface feedFailedInterface{
    type: typeof FEED_FAILED,
    error: any,
    loading: boolean
}
export interface postCreateStartInterface{
    type: typeof POST_CREATE_START,
    loading: boolean
}
export interface postCreateLoadedInterface{
    type: typeof POST_CREATE_LOADED,
    postCreate: {
        text:string
        media_type:string
        media:string
        author_id:number
        author_name:string
      },
    loading: boolean
}
export interface postCreateFailedInterface{
    type: typeof POST_CREATE_FAILED,
    error: any,
    loading: boolean
}
export interface postSearchStartInterface{
    type: typeof POST_SEARCH_START,
    loading: boolean
}
export interface postSearchLoadedInterface{
    type: typeof POST_SEARCH_LOADED,
    posts:Array<postInterface>,
    loading: boolean
}
export interface postSearchFailedInterface{
    type: typeof POST_SEARCH_FAILED,
    error: any,
    loading: boolean
}
export interface bookmarkCreateStartInterface{
    type: typeof BOOKMARK_CREATE_START,
    loading: boolean
}
export interface bookmarkCreateSuccessInterface{
    type: typeof BOOKMARK_CREATE_SUCCESS,
    posts:Array<postInterface>,
    loading: boolean
}
export interface bookmarkCreateFailedInterface{
    type: typeof BOOKMARK_CREATE_FAILED,
    error: any,
    loading: boolean
}
export interface voteStartInterface{
    type: typeof VOTE_START,
    loading: boolean
}
export interface voteLoadedInterface{
    type: typeof VOTE_LOADED,
    voteStatus: string,
    loading: boolean
}
export interface voteFailedInterface{
    type: typeof VOTE_FAILED,
    error: any,
    loading: boolean
}
export interface commentStartInterface{
    type: typeof COMMENT_START,
    loading: boolean
}
export interface commentLoadedInterface{
    type: typeof COMMENT_LOADED,
    comments: string,
    loading: boolean
}
export interface commentFailedInterface{
    type: typeof COMMENT_FAILED,
    error: any,
    loading: boolean
}
export interface replyStartInterface{
    type: typeof REPLY_START,
    loading: boolean
}
export interface replyLoadedInterface{
    type: typeof REPLY_LOADED,
    replys: string,
    loading: boolean
}
export interface replyFailedInterface{
    type: typeof REPLY_FAILED,
    error: any,
    loading: boolean
}
export interface postInterface{
    id:number
    text:string
    posted_at:string
    media_type:string
    is_liked_by_user:boolean
    is_saved_by_user:boolean
    media:string
    viewer_name:string
    viewer_avatar:string
    viewer_tagline:string
    author_id:number
    author_name:string
    author_avatar:string
    author_tagline:string
    likes_count:number
    comment_count:number
    liked_by:any
    comments:any
    message:string
  }

  export interface feedState {
    postCreate: {
        text:string
        media_type:string
        media:string
        author_id:number
        author_name:string
      },
    posts:Array<postInterface>,
    voteStatus:string,
    loading:boolean,
    error:string|null,
}
  export type feedActions = 
|feedStartInterface
|feedLoadedInterface
|feedFailedInterface
|postCreateStartInterface
|postCreateLoadedInterface
|postCreateFailedInterface
|postSearchStartInterface
|postSearchLoadedInterface
|postSearchFailedInterface
|bookmarkCreateStartInterface
|bookmarkCreateSuccessInterface
|bookmarkCreateFailedInterface
|voteStartInterface
|voteLoadedInterface
|voteFailedInterface
|commentStartInterface
|commentLoadedInterface
|commentFailedInterface
|replyStartInterface
|replyLoadedInterface
|replyFailedInterface