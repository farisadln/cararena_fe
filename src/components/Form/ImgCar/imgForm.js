import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'

export default class imgFrom extends Component {
  constructor() {
    super()
    this.state = { img1: '', img2: '', img3: '', specificationId:'' }
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const url = 'http://127.0.0.1:4000/api/img'
    const data = { img1: this.state.img1, img2: this.state.img2,  img3: this.state.img3, specificationId: this.state.specificationId}
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
      .then((response) => console.log('Success:', response))
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <div className='col-md-12'>
            <Col md={{ span: 7, offset: 3 }}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label>img1</Form.Label>
                  <Form.Control
                    placeholder='img1'
                    onChange={this.handleChange}
                    name='img1'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>img2</Form.Label>
                  <Form.Control
                    placeholder='img2'
                    onChange={this.handleChange}
                    name='img2'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>img3</Form.Label>
                  <Form.Control
                    placeholder='img3'
                    onChange={this.handleChange}
                    name='img3'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>specificationId</Form.Label>
                  <Form.Control
                    placeholder='specificationId'
                    onChange={this.handleChange}
                    name='specificationId'
                  />
                </Form.Group>
                <Button variant='primary' value='Add' type='submit'>
                  Submit
                </Button>
              </Form>
            </Col>
          </div>
        </Row>
      </Container>
    )
  }
}
