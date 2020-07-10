import React, { Component } from 'react'

import {
  Button,
  Checkbox,
  Form,
  Sidebar,
  Segment,
  Header,
  TextArea
} from 'semantic-ui-react'
import SidebarExampleVisible from '../../Layout/SidebarExampleVisible'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

export default class generalForm extends Component {
  constructor() {
    super()
    this.state = {
      urlGeneral: '',
      urlSpecification: '',
      urlImg: '',
      urlReview: '',
      urlBackground: '',
    }
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })

  }

  handleSubmit = (event) => {
    event.preventDefault()
    const url = 'http://localhost:4000/api/url/'
    const data = {
      urlGeneral: this.state.urlGeneral,
      urlSpecification: this.state.urlSpecification,
      urlImg: this.state.urlImg,
      urlReview: this.state.urlReview,
      urlBackground: this.state.urlBackground
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
      .then((response) => console.log('Success:', response))
  }

  refreshPage() {
    window.location.reload(false)
  }
  render() {
    return (
      <Sidebar.Pushable className='top-section pusher' as={Segment}>
        <SidebarExampleVisible />
        <Sidebar.Pusher className='four-hundred-width'>
          <Header as='h2'>
            Url Form
            <Header.Subheader>Url general data.
           
            </Header.Subheader>
            <Header.Subheader>
            Pisahkan link dengan tanda (;)
            </Header.Subheader>
          </Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>urlGeneral</label>
              <TextArea
                placeholder='urlGeneral'
                onChange={this.handleChange}
                name='urlGeneral'
              />
            </Form.Field>
            <Form.Field>
              <label>urlSpecification</label>
              <TextArea
                placeholder='urlSpecification'
                onChange={this.handleChange}
                name='urlSpecification'
              />
            </Form.Field>
            <Form.Field>
              <label>urlImg</label>
              <TextArea
                placeholder='urlImg'
                onChange={this.handleChange}
                name='urlImg'
              />
            </Form.Field>

            <Form.Field>
              <label>urlReview</label>
              <TextArea
                placeholder='urlReview'
                onChange={this.handleChange}
                name='urlReview'
              />
            </Form.Field>

            <Form.Field>
              <label>urlBackground</label>
              <input
                defaultValue="-"
                placeholder='urlBackground'
                onChange={this.handleChange}
                name='urlBackground'
              />
            </Form.Field>

            <Button variant='primary' value='Add' type='submit'>
              Submit
            </Button>
          </Form>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}
