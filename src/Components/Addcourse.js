import React, { useState } from "react";
import axios from "axios";
import base_url from "../api";
export default class Addcourse extends React.Component {
  state = {
    title: "",
    description: "",
    success: false
  };

  titleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  descriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  clearFeilds() {
    this.setState({
      title: "",
      description: ""
    });
  }

  addCourse = () => {
    const savecourse = {
      title: this.state.title,
      description: this.state.description
    };

    axios.post(`${base_url}/course/savecourse`, savecourse).then((response) => {
      this.clearFeilds();
    });
    this.setState({ success: true });
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
                        onClick={() => this.addCourse()}
                      >
                        Add Course
                      </button>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      {this.state.success ? "Data Inserted Successfully" : ""}
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </React.Fragment>
        </div>
      </div>
    );
  }
}
