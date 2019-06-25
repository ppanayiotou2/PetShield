import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  CustomInput
} from "reactstrap";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import smallLogo from "../../../src/logo-small.png";

class SignUp extends Component {
  state = {
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    gender: "m",
    dob: "",
    country: "cy",
    city: "nic",
    hasPet: false
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="custom-bg">
        <div className="container pt-5">
          <Form className="user-form" onSubmit={this.handleSubmit}>
            <Row>
              <Col md={12}>
                <div className="lined-wrapper mb-4">
                  <img src={smallLogo} alt="" />
                </div>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <FormGroup>
                  <Label for="examplePassword">Hλεκτρονική Διεύθυνση:</Label>
                  <Input
                    onChange={this.handleChange}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Πληκτρολογήστε την ηλεκτρονική σας διεύθυνση..."
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Κωδικός Πρόσβασης:</Label>
                  <Input
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Πληκτρολογήστε τον κωδικό πρόσβασης σας..."
                    required
                  />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">
                    Επιβεβαίωση Κωδικού Πρόσβασης:
                  </Label>
                  <Input
                    type="password"
                    name="verifypassword"
                    placeholder="Επιβεβαιώστε τον κωδικό πρόσβασης σας..."
                    required
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Όνομα:</Label>
                  <Input
                    onChange={this.handleChange}
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Πληκτρολογήστε το όνομα σας..."
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Επίθετο:</Label>
                  <Input
                    onChange={this.handleChange}
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Πληκτρολογήστε το επίθετο σας..."
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Φύλο:</Label>
                  <Input
                    type="select"
                    name="gender"
                    id="gender"
                    onChange={this.handleChange}
                  >
                    <option selected value="m">
                      Aρσενικό
                    </option>
                    <option value="f">θηλυκό</option>
                    <option value="o">Άλλο</option>
                  </Input>
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Ημερομηνία Γέννησης:</Label>
                  <Input
                    type="date"
                    name="dob"
                    id="dob"
                    required
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Χώρα:</Label>
                  <Input
                    type="select"
                    name="country"
                    id="country"
                    onChange={this.handleChange}
                  >
                    <option selected value="cy">
                      Κύπρος
                    </option>
                    <option value="gr">Ελλάδα</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Πόλη:</Label>
                  <Input
                    type="select"
                    name="city"
                    id="city"
                    onChange={this.handleChange}
                  >
                    <option selected value="Λευκωσία">
                      Λευκωσία
                    </option>
                    <option value="lar">Λάρνακα</option>
                    <option value="lim">Λεμεσός</option>
                    <option value="pahp">Πάφος</option>
                    <option value="fam">Αμμόχωστος </option>
                    <option value="ker">Κερύνεια </option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <FormGroup>
                  <div>
                    <CustomInput
                      onChange={this.handleChange}
                      type="checkbox"
                      name="hasPet"
                      id="hasPet"
                      label="Έχετε ή είχατε κατοικίδιο ζώο στο παρελθόν;"
                      inline
                    />
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <Button className="cus-btn mt-3">Εγγραφή</Button>
            {authError ? <p>{authError}</p> : null}
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: creds => dispatch(signUp(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
