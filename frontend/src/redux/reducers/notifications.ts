import { notificationsFailedInterface, notificationsLoadedInterface, notificationsStartInterface, 
    notificationsState, NOTIFICATIONS_FAILED, NOTIFICATIONS_LOADED, NOTIFICATIONS_START } from "redux/actionTypes/notifications";
    import {AppActions} from '../actionTypes/appActions';

const notificationsInitialState:notificationsState={
  notifications:[],
  loading:false,
  error:null,
}

const notificationsStart = (state:notificationsState, action:notificationsStartInterface) => {
  return {
      ...state,
      loading:true,
  }
}
const notificationsLoaded = (state:notificationsState, action:notificationsLoadedInterface) => {
  return {
      ...state,
      notifications:action.notifications,
      loading:false,
  }
}
const notificationsFailed = (state:notificationsState, action:notificationsFailedInterface) => {
  return {
      ...state,
      error:action.error,
      loading:false,
  }
}

const notificationsReducer = (state=notificationsInitialState, action:AppActions):notificationsState => {
  switch (action.type) {
      case NOTIFICATIONS_START: return notificationsStart(state, action);
      case NOTIFICATIONS_LOADED: return notificationsLoaded(state, action);
      case NOTIFICATIONS_FAILED: return notificationsFailed(state, action);
      default:
          return state;
  }
}

export default notificationsReducer;