import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import feedReducer from './reducers/posts';
import profileReducer from './reducers/profile';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import jobReducer from './reducers/job';
import hashtagReducer from './reducers/hashtag';
import connectionsReducer from './reducers/connections';
import notificationsReducer from './reducers/notifications';
import chatHistoryReducer from './reducers/chat';

export const rootReducer = combineReducers({ auth: authReducer, feed: feedReducer , profile: profileReducer , job: jobReducer , 
    hashtag: hashtagReducer, connections: connectionsReducer, notifications: notificationsReducer,chat:chatHistoryReducer});

export type AppState= ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));