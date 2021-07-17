export const PROFILE_START = 'PROFILE_START';
export const PROFILE_LOADED = 'PROFILE_LOADED';
export const PROFILE_FAILED = 'PROFILE_FAILED';
export const BANNER_START =  'BANNER_START';
export const BANNER_LOADED =  'BANNER_LOADED';
export const BANNER_FAILED =  'BANNER_FAILED';


export interface profileStartInterface{
    type: typeof PROFILE_START,
    loading: boolean
}

export interface profileLoadedInterface{
    type: typeof PROFILE_LOADED,
    dashboard: dashboardInterface,
    loading: boolean
}

export interface profileFailedInterface{
    type: typeof PROFILE_FAILED,
    error: any,
    loading: boolean
}
export interface bannerStartInterface{
    type: typeof BANNER_START,
    loading: boolean
}
export interface bannerLoadedInterface{
    type: typeof BANNER_LOADED,
    banner: bannerInterface,
    loading: boolean
}
export interface bannerFailedInterface{
    type: typeof BANNER_FAILED,
    error: any,
    loading: boolean
}
export interface dashboardInterface{
    user_name:string,
    user_avatar:string,
    user_tagline:string,
    bookmarks:number,
    connection:number,
}

export interface bannerInterface{
    avatar: string,
    first_name: string,
    last_name: string,
    location: string,
    background: string,
    tagline: string,
    experience: any[],
    volunteer_experience:Array<volunteer_experienceI>,
    certifications:Array<certificationsI>,
    project:Array<projectI>,
    course:Array<courseI>,
    test:Array<testI>,
    skills:{id:number,skills_list:string,top_skills:string,user:number,endorsed_by:Array<number>},
    connection: number,
    profile_views: number,
    bookmarked_posts: number,
    about: string,
    is_connected: boolean,
    is_pending: boolean,
    connection_id: number
}

export interface volunteer_experienceI {
    id:number,
    organization_name:string,
    role:boolean,
    cause:string|null,
    start_date:number,
    end_date:number,
    description:string,
    user:number,
}
export interface certificationsI {
    id:number,
    certification_name:string,
    organization_name:string,
    issue_date:number|null,
    expiration_date:number|null,
    credential_id:number|null,
    credential_url:string|null,
    user:number|null,
}
export interface projectI {
    id:number,
    project_name:string,
    start_date:number,
    end_date:number|null,
    project_url:string|null,
    description:string|null,
    organization_name:string|null,
    user:Array<number>,
}
export interface courseI {
    id:number,
    course_name:string,
    passed_date:number,
    organization_name:string|null,
    user:number|null,
}
export interface testI {
    id:number,
    title:string,
    test_date:number,
    project_url:string|null,
    description:string|null,
    user:number|null,
    organization_name:string|null,
}
export interface profileState {
    dashboard:dashboardInterface,
    banner:bannerInterface,
    loading:boolean,
    error:string|null,
}

export type profileActions = 
|profileStartInterface
|profileLoadedInterface
|profileFailedInterface
|bannerStartInterface
|bannerLoadedInterface
|bannerFailedInterface
