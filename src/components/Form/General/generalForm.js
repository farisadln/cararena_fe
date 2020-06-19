import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'

export default class generalFrom extends Component {
  constructor() {
    super()
    this.state = { type: '', hargaOtr: '', brandId: '' }
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const url = 'http://127.0.0.1:4000/api/general'
    const data = { type: this.state.type, hargaOtr: this.state.hargaOtr,  brandId: this.state.brandId}
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
                  <Form.Label>Tipe Mobil</Form.Label>
                  <Form.Control
                    placeholder='Tipe Mobil'
                    onChange={this.handleChange}
                    name='type'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Harga OTR</Form.Label>
                  <Form.Control
                    placeholder='Harg OTR'
                    onChange={this.handleChange}
                    name='hargaOtr'
                  />
                  
                </Form.Group>
                <Form.Group>
                  <Form.Label>BrandId</Form.Label>
                  <Form.Control
                    placeholder='Id Brand Mobil'
                    onChange={this.handleChange}
                    name='brandId'
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
