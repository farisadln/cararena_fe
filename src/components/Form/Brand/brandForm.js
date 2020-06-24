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

export default class brandFrom extends Component {
  constructor() {
    super()
    this.state = { carBrand: '', logoUrl: '' }
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log('brand :  ' + this.state.carBrand)
    console.log('url: ' + this.state.logoUrl)
    const url = 'http://localhost:4000/api/brand'
    const data = { carBrand: this.state.carBrand, logoUrl: this.state.logoUrl }
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
              Brand Form
              <Header.Subheader>
                Manage brand data
              </Header.Subheader>
            </Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Brand Mobil</label>
                <input
                  placeholder='Brand Mobil'
                  onChange={this.handleChange}
                  name='carBrand'
                />
              </Form.Field>
              <Form.Field>
                <label>Logo Url</label>
                <input
                  placeholder='ex : https://d2pa5gi5n2e1an.cloudfront.net/webp/id/images/maker/cars/S_aston_martin.png'
                  onChange={this.handleChange}
                  name='logoUrl'
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
