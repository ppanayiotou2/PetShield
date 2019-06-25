import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";
import axios from "axios";
//import loader from "../../../src/loader.gif";
import moment from "moment";
import localization from "moment/locale/el";

class Search extends Component {
  state = {
    pets: [],
    loading: true
  };

  componentWillMount() {
    axios.get("http://localhost/api/public/api/pets").then(response => {
      this.setState({ loading: true, pets: response.data });
    });
  }

  render() {
    moment.locale("el", localization);

    //const { loading } = this.state;
    let pets = this.state.pets.map(pet => {
      return (
        <div key={pet.id} className="col-lg-3 pets-card-wrapper">
          <Card className="pets-card col-lg-12">
            <CardImg src={pet.profile} alt="Card image cap" />
            <CardBody>
              <CardText className="pb-3">
                <Row className="mb-3">
                  <Col lg="6">
                    <div className="d-flex flex-column">
                      <span className="light-text">ΟΝΟΜΑ</span>{" "}
                      <span className="important-text">{pet.name}</span>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="d-flex flex-column">
                      <span className="light-text">ΡΑΤΣΑ</span>
                      <span className="important-text"> {pet.breed} </span>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="6">
                    <div className="d-flex flex-column">
                      <span className="light-text">ΗΛΗΚΙΑ</span>{" "}
                      <span className="important-text">{pet.age}</span>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="d-flex flex-column">
                      <span className="light-text">ΓΕΝΟΣ</span>
                      <span className="important-text">
                        {pet.gender === "m" ? "Αρσενικό" : "Θηλυκό"}
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6">
                    <div className="d-flex flex-column">
                      <span className="light-text">ΧΡΩΜΑ</span>{" "}
                      <span className="important-text">{pet.colour}</span>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="d-flex flex-column">
                      <span className="light-text">ΗΜΕΡΟΜΗΝΙΑ</span>
                      <span className="important-text">
                        {moment(pet.additionDate).format("l")}
                      </span>
                    </div>
                  </Col>
                </Row>
              </CardText>
              <Link
                className="card-btn"
                to={{
                  pathname: `/pet/${pet.id}`,
                  state: { pet: pet.id }
                }}
              >
                Περισσότερα
              </Link>
            </CardBody>
          </Card>
        </div>
      );
    });
    return (
      <div className="container pt-5">
        <div id="side-nav" />
        <Container id="search-content">
          {/*loading ? (
            <div id="loader">
              <img src={loader} alt="a" />
            </div>
          ) : (
            <span></span>
          )*/}

          <Row>{pets}</Row>
        </Container>
      </div>
    );
  }
}

export default Search;
