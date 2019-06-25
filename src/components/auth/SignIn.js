import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import smallLogo from "../../../src/logo-small.png";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="custom-bg">
        <div className="container pt-5">
          <Form className="user-form" onSubmit={this.handleSubmit}>
            <div className="lined-wrapper mb-4">
              <img src={smallLogo} alt="" />
            </div>
            <FormGroup className="mb-4">
              <Label for="exampleEmail">Hλεκτρονική Διεύθυνση:</Label>
              <Input
                onChange={this.handleChange}
                type="email"
                name="email"
                id="email"
                placeholder="Πληκτρολογήστε την ηλεκτρονική σας διεύθυνση..."
              />
            </FormGroup>
            <FormGroup className="mb-4">
              <Label for="exampleEmail">Κωδικός Πρόσβασης:</Label>
              <Input
                onChange={this.handleChange}
                type="password"
                name="password"
                id="password"
                placeholder="Πληκτρολογήστε τον κωδικό πρόσβασης σας..."
              />
            </FormGroup>
            <Button className="cus-btn mt-3">Σύνδεση</Button>
            <div className="center red-text">
              {authError ? <p>{authError}</p> : null}
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
