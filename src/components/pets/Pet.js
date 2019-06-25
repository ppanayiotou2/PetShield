import React from "react";
import axios from "axios";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

class Pet extends React.Component {
  state = {
    activePet: []
  };

  componentDidMount() {
    const petID = this.props.location.state.pet;

    axios
      .get(`http://localhost/api/public/api/pets/${petID}`)
      .then(response => {
        this.setState({
          activePet: response.data
        });
      });
  }

  render() {
    let pets = this.state.activePet.map(pet => {
      return (
        <div>
          <div id="side-nav" />
          <Container id="search-content">
            <div key={pet.id} className="col-lg-12 pets-card-wrapper">
              <Card className="pets-card col-lg-12">
                <CardImg src={pet.profile} alt="Card image cap" />
                <CardBody>
                  <CardText className="pb-3">
                    <Row className="mb-4">
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
                            {" "}
                            {pet.additionDate}{" "}
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </CardText>
                  <div
                    dangerouslySetInnerHTML={{ __html: pet.description }}
                  ></div>
                </CardBody>
              </Card>
            </div>
          </Container>
        </div>
      );
    });
    return (
      <div>
        <div id="side-nav" />
        <Container id="search-content">
          <Row>{pets}</Row>
        </Container>
      </div>
    );
  }
}

export default Pet;
