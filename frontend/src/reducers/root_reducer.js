import { combineReducers } from 'redux';
import session from './session_reducer';
import sessionApi from './session_api_reducer';
import errors from './errors_reducer';
import TweetsReducer from './tweets_reducer';

const RootReducer = combineReducers({
  session,
  sessionApi,
  tweets: TweetsReducer,
  errors
});

export default RootReducer;