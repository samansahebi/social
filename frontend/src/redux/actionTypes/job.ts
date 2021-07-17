export const JOB_START =  'JOB_START';
export const JOB_LOADED =  'JOB_LOADED';
export const JOB_FAILED =  'JOB_FAILED';
export const JOB_SEARCH_START =  'JOB_SEARCH_START';
export const JOB_SEARCH_LOADED =  'JOB_SEARCH_LOADED';
export const JOB_SEARCH_FAILED =  'JOB_SEARCH_FAILED';
export const JOB_CREATE_START =  'JOB_CREATE_START';
export const JOB_CREATE_LOADED =  'JOB_CREATE_LOADED';
export const JOB_CREATE_FAILED =  'JOB_CREATE_FAILED';

export interface jobStartInterface{
    type: typeof JOB_START,
    loading: boolean
}

export interface jobLoadedInterface{
    type: typeof JOB_LOADED,
    vacancy: Array<jobInterface>,
    loading: boolean
}

export interface jobFailedInterface{
    type: typeof JOB_FAILED,
    error: any,
    loading: boolean
}
export interface jobSearchStartInterface{
    type: typeof JOB_SEARCH_START,
    loading: boolean
}

export interface jobSearchLoadedInterface{
    type: typeof JOB_SEARCH_LOADED,
    vacancy: Array<jobInterface>,
    loading: boolean
}

export interface jobSearchFailedInterface{
    type: typeof JOB_SEARCH_FAILED,
    error: any,
    loading: boolean
}
export interface jobCreateStartInterface{
    type: typeof JOB_CREATE_START,
    loading: boolean
}

export interface jobCreateLoadedInterface{
    type: typeof JOB_CREATE_LOADED,
    vacancyCreate: {
        organization: string,
        title: string,
        location: string,
        skills_required: string,
        industry: string,
        pay_range: string,
        external_site_url: string,
        employment_type: string,
        description: string,
        file_linked: any,
        is_remote: boolean,
        posted_by: number,
      },
    loading: boolean
}

export interface jobCreateFailedInterface{
    type: typeof JOB_CREATE_FAILED,
    error: any,
    loading: boolean
}

export interface jobInterface{
    vacancy_id: number,
    title: string,
    organization: string,
    location: string,
    employment_type: string,
    description: string,
    skills_required: string,
    posted_at: string,
    industry: string,
    pay_range: string,
    file_linked: string,
    num_of_applicants: number,
    applicants: any[],
    is_my_posted_vacancy: boolean,
    is_bookmarked: boolean,
    has_applied: boolean
  }

  export interface jobState {
    vacancyCreate:{
        organization: string,
        title: string,
        location: string,
        skills_required: string,
        industry: string,
        pay_range: string,
        external_site_url: string,
        employment_type: string,
        description: string,
        file_linked: any,
        is_remote: boolean,
        posted_by: number,
      },
    vacancy:Array<jobInterface>,
    loading:boolean,
    error:string|null,
}

export type jobActions = 
|jobStartInterface
|jobLoadedInterface
|jobFailedInterface
|jobSearchStartInterface
|jobSearchLoadedInterface
|jobSearchFailedInterface
|jobCreateStartInterface
|jobCreateLoadedInterface
|jobCreateFailedInterface