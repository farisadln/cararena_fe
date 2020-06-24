import React, { Component, useState, useEffect } from 'react'
import { withRouter } from 'react-router'

import { Button, Checkbox, Form, Sidebar, Segment, Header } from 'semantic-ui-react'
import SidebarExampleVisible from '../../Layout/SidebarExampleVisible'
export default class editSpecification extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      img1: this.props.img1,
      img2: this.props.img2,
      img3: this.props.img3,
      specificationId: this.props.specificationId
    }
  }

  componentDidMount(props) {
    var pathArray = window.location.pathname.split('/')[2]
    console.log(pathArray)
    const API_URL = fetch('http://139.162.28.184:4000/api/img/' + pathArray)

    API_URL.then((res) => {
      if (res.status === 200) return res.json()
    }).then((resJson) => {
      this.setState({
        id: resJson.id,
        img1: resJson.img1,
        img2: resJson.img2,
        img3: resJson.img3,
        specificationId: resJson.specificationId
      })
    })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    var pathArray = window.location.pathname.split('/')[2]
    event.preventDefault()
    const url = 'http://139.162.28.184:4000/api/img/' + pathArray

    const data = {
      id: this.state.id,
      img1: this.state.img1,
      img2: this.state.img2,
      img3: this.state.img3,
      specificationId: this.state.specificationId,
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
      <Sidebar.Pushable className='top-section pusher' as={Segment}>
        <SidebarExampleVisible />
        <Sidebar.Pusher className='four-hundred-width'>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Id</label>
              <input
                placeholder='Id'
                value={this.state.id}
                disabled
                name='id'
              />
            </Form.Field>
            <Form.Field>
              <label>img1</label>
              <input
                placeholder='img1'
                value={this.state.img1}
                onChange={this.handleChange}
                name='img1'
              />
            </Form.Field>


            <Form.Field>
              <label>img2</label>
              <input
                placeholder='img2'
                onChange={this.handleChange}
                name='img2'
                type='text'
                value={this.state.img2}
              />
            </Form.Field>
            <Form.Field>
              <label>img3</label>
              <input
                placeholder='img3'
                onChange={this.handleChange}
                value={this.state.img3}
                name='img3'
              />
            </Form.Field>
            <Form.Field>
              <label>specificationId</label>
              <input
                placeholder='specificationId'
                onChange={this.handleChange}
                value={this.state.specificationId}
                name='specificationId'
              />
            </Form.Field>

            <Button variant='primary' value='Add' type='submit'>
              Update
            </Button>
          </Form>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}
