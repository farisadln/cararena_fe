import React, { Component } from "react";

import userService from "../../services/userService";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";



export default class adminBoardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    userService.getAdminBoard().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={2}>

          </Col>
          <Col md={10}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Brand</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Logo URL</Form.Label>
                <Form.Control type="password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
