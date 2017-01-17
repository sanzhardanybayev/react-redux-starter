/**
 * Created by Sanzhar on 14.01.2017.
 */
import {combineReducers} from 'redux';
import courses from './courseReducer';
import test from './testReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    test,
    ajaxCallsInProgress
});

export default rootReducer;
