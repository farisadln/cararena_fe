import React, { Component } from 'react'

import { Button, Checkbox, Form, Sidebar, Segment, Header } from 'semantic-ui-react'
import SidebarExampleVisible from '../../Layout/SidebarExampleVisible'

export default class generalForm extends Component {
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
                    placeholder='Harg OTR'
                    onChange={this.handleChange}
                    name='hargaOtr'
                  />

                </Form.Field>
                <Form.Field>
                  <label>BrandId</label>
                  <input
                    placeholder='Id Brand Mobil'
                    onChange={this.handleChange}
                    name='brandId'
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
