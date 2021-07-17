export const CHATHISTORY_START =  'CHATHISTORY_START';
export const CHATHISTORY_LOADED =  'CHATHISTORY_LOADED';
export const CHATHISTORY_FAILED =  'CHATHISTORY_FAILED';

export interface chatHistoryStartInterface{
    type: typeof CHATHISTORY_START,
    loading: boolean
}

export interface chatHistoryLoadedInterface{
    type: typeof CHATHISTORY_LOADED,
    chatHistory: Array<chatHistoryInterface>,
    loading: boolean
}

export interface chatHistoryFailedInterface{
    type: typeof CHATHISTORY_FAILED,
    error: any,
    loading: boolean
}

export interface chatHistoryInterface {
    action: string,
    detail: string,
    created_at: string,
    source_id: number,
    source_name: string,
    source_avatar: string
}
export interface chatHistoryState {
    chatHistory:Array<chatHistoryInterface>,
    loading:boolean,
    error:string|null,
}

export type chatHistoryActions = 
|chatHistoryStartInterface
|chatHistoryLoadedInterface
|chatHistoryFailedInterface
