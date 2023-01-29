import { combineReducers } from 'redux';

import auth from './auth';
import show from './show';
// import {newCommentReducer} from './cards';

export const reducers = combineReducers({ auth, show });
