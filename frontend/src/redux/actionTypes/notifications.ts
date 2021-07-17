export const NOTIFICATIONS_START =  'NOTIFICATIONS_START';
export const NOTIFICATIONS_LOADED =  'NOTIFICATIONS_LOADED';
export const NOTIFICATIONS_FAILED =  'NOTIFICATIONS_FAILED';

export interface notificationsStartInterface{
    type: typeof NOTIFICATIONS_START,
    loading: boolean
}

export interface notificationsLoadedInterface{
    type: typeof NOTIFICATIONS_LOADED,
    notifications: Array<notificationsInterface>,
    loading: boolean
}

export interface notificationsFailedInterface{
    type: typeof NOTIFICATIONS_FAILED,
    error: any,
    loading: boolean
}

export interface notificationsInterface {
    action: string,
    detail: string,
    created_at: string,
    source_id: number,
    source_name: string,
    source_avatar: string
}
export interface notificationsState {
    notifications:Array<notificationsInterface>,
    loading:boolean,
    error:string|null,
}

export type notificationsActions = 
|notificationsStartInterface
|notificationsLoadedInterface
|notificationsFailedInterface
