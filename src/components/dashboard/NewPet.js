import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Container
} from "reactstrap";
import Sidenav from "./Sidenav";
import { Upload } from "react-feather";
import CKEditor from "react-ckeditor-component";

class NewPet extends Component {
  constructor(props) {
    super(props);
    this.updateDescription = this.updateDescription.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      name: "",
      breed: "",
      gender: "m",
      profile: "",
      age: "",
      description: "",
      colour: "",
      additionDate: "",
      uploadImageText: "Επέλεξε Φωτογραφία"
    };
  }

  updateDescription(newContent) {
    this.setState({
      description: newContent
    });
  }

  onChange(evt) {
    console.log("onChange fired with event info: ", evt);
    var newContent = evt.editor.getData();
    this.setState({
      description: newContent
    });
  }

  onBlur(evt) {
    console.log("onBlur event called with event info: ", evt);
  }

  afterPaste(evt) {
    console.log("afterPaste event called with event info: ", evt);
  }

  handleSubmit = event => {
    event.preventDefault();
    var name = event.target.name.value;
    var gender = event.target.gender.value;
    var age = event.target.age.value;
    var breed = event.target.breed.value;
    var description = this.state.description;
    var colour = event.target.colour.value;
    var additionDate = new Date();
    var profile = this.state.profile;
    axios
      .post("http://localhost/api/public/api/pets", {
        name: name,
        gender: gender,
        age: age,
        breed: breed,
        description: description,
        colour: colour,
        additionDate: additionDate,
        profile: profile
      })
      .then(response => {
        if (response.data.status === "success") {
          alert("Success");
        }
      })
      .catch(function(error) {
        alert(error);
      });
  };

  onCha = event => {
    let files = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = event => {
      this.setState({
        profile: event.target.result,
        uploadImageText: files[0].name
      });
    };
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashboard-wrapper">
        <Sidenav />
        <Container id="dashboard-content">
          <Form
            className="dashboard-card"
            onSubmit={this.handleSubmit}
            enctype="multipart/form-data"
          >
            <Row>
              <Col md={12}>
                <div className="card-title">
                  <h5>Νέο Ζώο</h5>
                </div>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <FormGroup>
                  <Label>Όνομα Σκύλου:</Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Πληκτρολογήστε το όνομα σκύλου..."
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Ράτσα Σκύλου:</Label>
                  <Input type="select" name="breed">
                    <option selected value="Labrador">
                      Labrador
                    </option>
                    <option value="German Shepherd">German Shepherd</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <FormGroup>
                  <Label>Χρώμα Σκύλου:</Label>
                  <Input
                    type="text"
                    name="colour"
                    placeholder="Πληκτρολογήστε το χρώμα του σκύλου..."
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Γένος:</Label>
                  <Input type="select" name="gender">
                    <option selected value="m">
                      Αρσενικό
                    </option>
                    <option value="f">Θηλυκό</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Ηληκία:</Label>
                  <Input type="number" name="age"></Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <input
                    type="file"
                    name="profile"
                    id="file"
                    class="inputfile"
                    onChange={this.onCha}
                  />
                  <label for="file">
                    <Upload />
                    {this.state.uploadImageText}
                  </label>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label for="examplePassword">Λίγες Πληροφορίες:</Label>
                  <CKEditor
                    activeClass="p10"
                    content={this.state.description}
                    events={{
                      blur: this.onBlur,
                      afterPaste: this.afterPaste,
                      change: this.onChange
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button className="cus-btn mt-3">Δημιουργία</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  };
};

export default compose(connect(mapStateToProps))(NewPet);
