/**
 * Created by Sanzhar on 17.01.2017.
 */
import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

//for THUNK
import thunk from 'redux-thunk';
import nock from  'nock';
import configureMockStore from 'redux-mock-store';

//Test a sync action
describe('Course Actions', () => {
    describe('createCourseSuccess', () => {
        it('should create a CREATE_COURSE_SUCCESS action', () => {
            //arrange
            const course = {id: 'clean-code', title: 'Clean Code'};
            const expectedAction = {
                type: types.CREATE_COURSE_SUCCESS,
                course: course
            };

            //act
            const action = courseActions.createCourseSuccess(course);
            //assert
            expect(action).toEqual(expectedAction);
        });
    });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
   afterEach(() => {
      nock.cleanAll();
   });

   it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
       // HEre's an example call to nock. Not needed are  wer're using MOCK API
       // nock('http://example.com/')
       //   .get('/courses')
       //   .reply(200, { body: { course: [{ id:1, firstName: 'Sanzhar', lastName: 'Dan'}] }});

       const expectedActions = [
           {type: types.BEGIN_AJAX_CALL},
           {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
       ];

       const store = mockStore({courses: [], expectedActions});
       store.dispatch(courseActions.loadCourses()).then(() => {
           const actions = store.getActions();
           expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
           expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
           done(); // -> tells Mocha async work is complete
       });
   });
});