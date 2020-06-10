import { combineReducers } from 'redux';
import user from './user';
import MessageBox from './MessageBox';

export default combineReducers({
    user,
    MessageBox
});