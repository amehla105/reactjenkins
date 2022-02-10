import React from "react";
import axios from "axios";
import base_url from "../api";
export default class Viewcourse extends React.Component {
  state = {
    courses: [],
    id: "",
    title: "",
    description: ""
  };

  componentDidMount() {
    this.getdataHandler();
  }
  getdataHandler() {
    axios.get(`${base_url}/course/findallcourses`).then((res) => {
      const courses = res.data;

      this.setState({ courses });
    });
  }

  deleteHandler = (courseid) => {
    axios
      .delete(`${base_url}/course/deletebycourseid/${courseid}`)
      .then((res) => {
        this.getdataHandler();
      });
  };
  clearFeilds() {
    this.setState({
      id: "",
      title: "",
      description: ""
    });
  }
  editHandler = (courseid) => {
    axios.get(`${base_url}/course/findbycourseid/${courseid}`).then((res) => {
      const courses = res.data;
      console.log(courses);
      this.setState({
        id: courses.courseId,
        title: courses.title,
        description: courses.description
      });
    });
  };
  updateHandler = () => {
    const updatecourse = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description
    };
    axios
      .put(`${base_url}/course/updatecoursebyid/${this.state.id}`, updatecourse)
      .then((res) => {
        this.getdataHandler();
        this.clearFeilds();
      });
  };

  render() {
    return (
      <div className="center_content">
        <div className="center">
          <React.Fragment>
            <div className="container">
              <h1>Courses Details</h1>
              <table className="table">
                <thead>
                  <tr>
                    <th>Course Title</th>
                    <th>Course Description</th>
                    <th>Actions</th>
                  </tr>
                  <tr>
                    <th>
                      <input
                        type="text"
                        value={this.state.title}
                        onChange={(data) =>
                          this.setState({ title: data.target.value })
                        }
                      />
                    </th>
                    <th>
                      <input
                        type="text"
                        value={this.state.description}
                        onChange={(data) =>
                          this.setState({ description: data.target.value })
                        }
                      />
                    </th>
                    <th>
                      <button
                        className="btn btn-warning"
                        onClick={() => this.updateHandler()}
                      >
                        Update
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                  {this.state.courses.map((course) => (
                    <tr key={course.courseId}>
                      <td>{course.title}</td>
                      <td>{course.description}</td>
                      <th>
                        <button
                          className="btn btn-primary"
                          onClick={() => this.editHandler(course.courseId)}
                        >
                          Edit
                        </button>{" "}
                        &nbsp; &nbsp; &nbsp;
                        <button
                          className="btn btn-warning"
                          onClick={() => this.deleteHandler(course.courseId)}
                        >
                          Delete
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </React.Fragment>
        </div>
      </div>
    );
  }
}
