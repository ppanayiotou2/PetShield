import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div>
        <div className="container pt-5">
          <Form className="user-form" onSubmit={this.handleSubmit}>
            <h4>Create Project</h4>
            <FormGroup>
              <Label for="exampleEmail">Project Title</Label>
              <Input
                onChange={this.handleChange}
                type="text"
                name="title"
                id="title"
                placeholder="Title..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Project Content</Label>
              <Input
                type="textarea"
                onChange={this.handleChange}
                name="content"
                id="content"
                placeholder="Content..."
              />
            </FormGroup>
            <Button className="btn btn-primary">Create</Button>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
