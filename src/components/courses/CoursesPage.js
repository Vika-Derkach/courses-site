import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
class CoursesPage extends Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.dispatch(courseActions.createCourse(this.state.course));
  };
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <h2>Course s</h2> <h3>Add Course</h3>{" "}
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}
CoursesPage.PropTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
};
function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}
export default connect(mapStateToProps)(CoursesPage);
