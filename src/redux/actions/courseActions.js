import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function loadCourseSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses,
  };
}
export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}
export function loadCourses() {
  return function (dipatch) {
    return courseApi
      .getCourses()
      .then((courses) => {
        dipatch(loadCourseSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
export function saveCourse(course) {
  return function (dispatch) {
    return courseApi
      .saveCourse(course)
      .then((savedCourse, getState) => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch((error) => {
        throw error;
      });
  };
}
