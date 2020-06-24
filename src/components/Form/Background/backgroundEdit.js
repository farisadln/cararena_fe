import React, { Component, useState, useEffect } from 'react'
import { withRouter } from 'react-router'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card, Form, Button, Table } from 'react-bootstrap'

export default class backgroundEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      url_img1: this.props.url_img1,
      url_img2: this.props.url_img2,
      url_img3: this.props.url_img3,
    }
  }

  componentDidMount(props) {
    var pathArray = window.location.pathname.split('/')[2]
    console.log(pathArray)
    const API_URL = fetch('http://139.162.28.184:4000/api/backgrounds/'+pathArray)
    console.log(API_URL)

    API_URL.then((res) => {
      if (res.status === 200) return res.json()
    }).then((resJson) => {
      this.setState({
        id: resJson.id,
        url_img1: resJson.url_img1,
        url_img2: resJson.url_img2,
        url_img3: resJson.url_img3
      })
    })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    var pathArray = window.location.pathname.split('/')[2]
    event.preventDefault()
    const url = 'http://139.162.28.184:4000/api/backgrounds/' + pathArray

    const data = {
      id: this.state.id,
      url_img1: this.state.url_img1,
      url_img2: this.state.url_img2,
      url_img3: this.state.url_img3,
    }
    fetch(url, {
      method: 'PUT',
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
                  <Form.Label>Id</Form.Label>
                  <Form.Control
                    placeholder='Id'
                    value={this.state.id}
                    disabled
                    name='id'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Img1</Form.Label>
                  <Form.Control
                    placeholder='Img1'
                    type='text'
                    onChange={this.handleChange}
                    value={this.state.url_img1}
                    name='carBrand'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Img1</Form.Label>
                  <Form.Control
                    placeholder='Img2'
                    onChange={this.handleChange}
                    name='logoUrl'
                    type='text'
                    value={this.state.url_img2}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Img3</Form.Label>
                  <Form.Control
                    placeholder='Img3'
                    onChange={this.handleChange}
                    name='logoUrl'
                    type='text'
                    value={this.state.url_img3}
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
