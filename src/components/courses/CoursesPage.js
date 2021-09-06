import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

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

    this.props.createCourse(this.state.course);
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
  createCourse: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
};
function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}
const mapDispatchToProps = {
  createCourse: courseActions.createCourse,
};
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
