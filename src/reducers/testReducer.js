/**
 * Created by Sanzhar on 14.01.2017.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default  function testReducer(state = initialState.courses,action){
    switch(action.type) {
        case types.LOAD_COURSES_TEST:
            return 'excelsior';
        default:
            return state;
    }
}