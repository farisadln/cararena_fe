import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'


export default class brandFrom extends Component {



  render() {
    return (
      <Container fluid>

        <Row>

          <div className='col-md-12'>
            <Col md={{ span: 7, offset: 3 }}>
              <Form>
                <Form.Group>
                  <Form.Label>Brand Mobil</Form.Label>
                  <Form.Control placeholder='Brand Mobil' />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Logo Url</Form.Label>
                  <Form.Control placeholder='contoh : https://d2pa5gi5n2e1an.cloudfront.net/webp/id/images/maker/cars/S_aston_martin.png ' />
                </Form.Group>
                <Button variant='primary' type='submit'>
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
