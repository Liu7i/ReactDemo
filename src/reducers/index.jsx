import { combineReducers } from 'redux';
import search from './search';
import app from './app';

export default combineReducers({
    search,
    app
});