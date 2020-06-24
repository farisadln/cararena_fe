import React, { Component } from 'react'

import {
  Button,
  Checkbox,
  Form,
  Sidebar,
  Segment,
  Header,
} from 'semantic-ui-react'
import SidebarExampleVisible from '../../Layout/SidebarExampleVisible'

export default class backgroundFrom extends Component {
  constructor() {
    super()
    this.state = { type: '', hargaOtr: '', brandId: '' }
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()

    const url = 'http://139.162.28.184:4000/api/general'
    const data = {
      type: this.state.type,
      hargaOtr: this.state.hargaOtr,
      brandId: this.state.brandId,
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
  render() {
    return (
      <Sidebar.Pushable className='top-section pusher' as={Segment}>
        <SidebarExampleVisible />
        <div className='four-hundred-width'>
          <Sidebar.Pusher>
            <Header as='h2'>
              Account Settings
              <Header.Subheader>
                Manage your account settings and set email preferences
              </Header.Subheader>
            </Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Tipe Mobil</label>
                <input
                  placeholder='Tipe Mobil'
                  onChange={this.handleChange}
                  name='type'
                />
              </Form.Field>
              <Form.Field>
                <label>Harga OTR</label>
                <input
                  placeholder='hargaOtr'
                  onChange={this.handleChange}
                  name='hargaOtr'
                />
              </Form.Field>
              <Form.Field>
                <label>Brand Id</label>
                <input
                  placeholder='brandId'
                  onChange={this.handleChange}
                  name='brandId'
                />
              </Form.Field>

              <Button value='Add' type='submit'>
                Submit
              </Button>
            </Form>
          </Sidebar.Pusher>
        </div>
      </Sidebar.Pushable>
    )
  }
}
