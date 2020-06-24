import React, { Component, useState, useEffect } from 'react'
import { withRouter } from 'react-router'

import { Button, Checkbox, Form, Sidebar, Segment, Header } from 'semantic-ui-react'
import SidebarExampleVisible from '../../Layout/SidebarExampleVisible'
export default class editBrand extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      carBrand: this.props.carBrand,
      logoUrl: this.props.logoUrl,
    }
  }

  componentDidMount(props) {
    var pathArray = window.location.pathname.split('/')[2]

    const API_URL = fetch('http://139.162.28.184:4000/api/brand/' + pathArray)

    API_URL.then((res) => {
      if (res.status === 200) return res.json()
    }).then((resJson) => {
      this.setState({
        id: resJson.id,
        carBrand: resJson.carBrand,
        logoUrl: resJson.logoUrl,
      })
    })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    var pathArray = window.location.pathname.split('/')[2]
    event.preventDefault()
    const url = 'http://139.162.28.184:4000/api/brand/' + pathArray

    const data = {
      id: this.state.id,
      carBrand: this.state.carBrand,
      logoUrl: this.state.logoUrl,
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
      <Sidebar.Pushable className="top-section pusher" as={Segment}>
      <SidebarExampleVisible/>
      <Sidebar.Pusher className='four-hundred-width'>
     
          <div className='col-md-12'>
            
              <Form onSubmit={this.handleSubmit}>

                <Form>
                  <label>Id</label>
                  <input
                    placeholder='Id'
                    value={this.state.id}
                    disabled
                    name='id'
                  />
                </Form>

                <Form>
                  <label>Brand Mobil</label>
                  <input
                    placeholder='Brand Mobil'
                    type='text'
                    onChange={this.handleChange}
                    value={this.state.carBrand}
                    name='carBrand'
                  />
                </Form>

                <Form>
                  <label>Logo Url</label>
                  <input
                    placeholder='ex : https://d2pa5gi5n2e1an.cloudfront.net/webp/id/images/maker/cars/S_aston_martin.png'
                    onChange={this.handleChange}
                    name='logoUrl'
                    type='text'
                    value={this.state.logoUrl}
                  />
                </Form>
                <Button variant='primary' value='Add' type='submit'>
                Update
              </Button>
              </Form>
          </div>
      </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}
