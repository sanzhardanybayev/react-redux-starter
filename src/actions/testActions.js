/**
 * Created by Sanzhar on 16.01.2017.
 */
/**
 * Created by Sanzhar on 14.01.2017.
 */
import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function testIt(courses) {
    return { type: types.LOAD_COURSES_TEST , courses};
}


export function test() {
    return function(dispatch) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(testIt(courses));
        }).catch(error => {
            console.log('oops, theres an error');
            console.log(error);
            throw(error);
        });
    };
}


