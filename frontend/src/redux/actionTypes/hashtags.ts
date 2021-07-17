export const HASHTAG_START =  'HASHTAG_START';
export const HASHTAG_LOADED =  'HASHTAG_LOADED';
export const HASHTAG_FAILED =  'HASHTAG_FAILED';

export interface hashtagStartInterface{
    type: typeof HASHTAG_START,
    loading: boolean
}

export interface hashtagLoadedInterface{
    type: typeof HASHTAG_LOADED,
    hashtag: Array<hashtagInterface>,
    loading: boolean
}

export interface hashtagFailedInterface{
    type: typeof HASHTAG_FAILED,
    error: any,
    loading: boolean
}

export interface hashtagInterface{
    topic: string,
    topic__count: number
  }
  export interface hashtagState {
    hashtag:Array<hashtagInterface>,
    loading:boolean,
    error:string|null,
}

export type hashtagActions = 
|hashtagStartInterface
|hashtagLoadedInterface
|hashtagFailedInterface