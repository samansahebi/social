import {authActions} from './auth'
import {feedActions} from './posts'
import {socialprofileActions} from './connections'
import {jobActions} from './job'
import {hashtagActions} from './hashtags'
import {notificationsActions} from './notifications'
import {profileActions} from './profile'
import { chatHistoryActions } from './chat'

export type AppActions = 
|authActions 
| feedActions 
| profileActions 
| jobActions 
| hashtagActions 
| socialprofileActions 
| notificationsActions
| chatHistoryActions