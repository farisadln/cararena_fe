import React, { Component, useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card, Form, Button, Table } from 'react-bootstrap'

export default class editBrand extends Component{
  
    constructor() {
        super()
        this.state = {id: '', carBrand: '', logoUrl: '' }
      }

      handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
      }

      handleSubmit = (event) => {
        event.preventDefault()
        const url = 'http://localhost:4000/api/brand/'

        const data = {id: this.state.id, carBrand: this.state.carBrand, logoUrl: this.state.logoUrl }
        fetch(url , {
          method: 'PUT', 
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        })
          .then((res) => res.json())
          .catch((error) => console.error('Error:', error))
          .then((response) => console.log('Success:', response))
      }

    

      render(){
        
        
          return(
              
            <Container fluid>
            <Row>
              <div className='col-md-12'>
                <Col md={{ span: 7, offset: 3 }}>
                  <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                      <Form.Label>Id</Form.Label>
                      <Form.Control
                        placeholder='Id'
                        defaultValue= {this.props.id}
                        disabled
                        name='id'
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Brand Mobil</Form.Label>
                      <Form.Control
                        placeholder='Brand Mobil'
                        onChange={this.handleChange}
                        defaultValue= {this.props.carBrand}
                        name='carBrand'
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Logo Url</Form.Label>
                      <Form.Control
                        placeholder='ex : https://d2pa5gi5n2e1an.cloudfront.net/webp/id/images/maker/cars/S_aston_martin.png'
                        onChange={this.handleChange}
                        name='logoUrl'
                        defaultValue= {this.props.logoUrl}
                      />
                    </Form.Group>
                    <Button variant='primary' value='Add' type='submit'>
                      Update
                    </Button>
                  </Form>
                </Col>
              </div>
            </Row>
          </Container>
          )
      }
   
}