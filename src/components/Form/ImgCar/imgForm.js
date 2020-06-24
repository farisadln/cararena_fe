import React, { Component } from 'react'

import { Button, Checkbox, Form, Sidebar, Segment, Header } from 'semantic-ui-react'
import SidebarExampleVisible from '../../Layout/SidebarExampleVisible'

export default class imgForm extends Component {
  constructor() {
    super()
    this.state = { img1: '', img2: '', img3: '', specificationId:'' }
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const url = 'http://localhost:4000/api/img'
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
      <Sidebar.Pushable className="top-section pusher" as={Segment}>
        <SidebarExampleVisible/>
        <Sidebar.Pusher className='four-hundred-width'>
        <Header as='h2'>
            Account Settings
            <Header.Subheader>
              Manage your account settings and set email preferences
            </Header.Subheader>
          </Header>
              <Form onSubmit={this.handleSubmit}>
              <Form>
                  <label>img1</label>
                  <input
                    placeholder='img1'
                    onChange={this.handleChange}
                    name='img1'
                  />
                </Form>
                <Form>
                  <label>img2</label>
                  <input
                    placeholder='img2'
                    onChange={this.handleChange}
                    name='img2'
                  />
                </Form>
                <Form>
                  <label>img3</label>
                  <input
                    placeholder='img3'
                    onChange={this.handleChange}
                    name='img3'
                  />
                </Form>
                <Button variant='primary' value='Add' type='submit'>
                  Submit
                </Button>
              </Form>

        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}
