import React, { Component, useState, useEffect } from 'react'
import { withRouter } from 'react-router'

import { Button, Checkbox, Form, Sidebar, Segment, Header } from 'semantic-ui-react'
import SidebarExampleVisible from '../../Layout/SidebarExampleVisible'

export default class editGeneral extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      urlGeneral: this.props.urlGeneral,
      urlSpecification: this.props.urlSpecification,
      urlImg: this.props.urlImg,
      urlReview: this.props.urlReview,
      urlBackground: this.props.urlBackground,

    }
  }

  componentDidMount(props) {
    var pathArray = window.location.pathname.split('/')[2]
    console.log(pathArray)
    const API_URL = fetch('http://139.162.28.184:4000/api/url/' + pathArray)

    API_URL.then((res) => {
      if (res.status === 200) return res.json()
    }).then((resJson) => {
      this.setState({
        id: resJson.id,
        urlGeneral: resJson.urlGeneral,
      urlSpecification: resJson.urlSpecification,
      urlImg: resJson.urlImg,
      urlReview: resJson.urlReview,
      urlBackground: resJson.urlBackground,
      })
    })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    var pathArray = window.location.pathname.split('/')[2]
    event.preventDefault()
    const url = 'http://139.162.28.184:4000/api/url/' + pathArray

    const data = {
      id: this.state.id,
      urlGeneral: this.state.urlGeneral,
      urlSpecification: this.state.urlSpecification,
      urlImg: this.state.urlImg,
      urlReview: this.state.urlReview,
      urlBackground: this.state.urlBackground
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

  render(){
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
                  <label>urlGeneral</label>
                  <input
                    placeholder='urlGeneral'
                    onChange={this.handleChange}
                    name='urlGeneral'
                    type='text'
                    value={this.state.urlGeneral}
                  />
                </Form>
                <Form>
                  <label>urlSpecification</label>
                  <input
                    placeholder='urlSpecification'
                    type='text'
                    onChange={this.handleChange}
                    value={this.state.urlSpecification}
                    name='urlSpecification'
                  />
                </Form>
               
                <Form>
                  <label>urlImg</label>
                  <input
                    placeholder='urlImg'
                    onChange={this.handleChange}
                    name='urlImg'
                    type='text'
                    value={this.state.urlImg}
                  />
                </Form>
                <Form>
                  <label>urlReview</label>
                  <input
                    placeholder='urlReview'
                    onChange={this.handleChange}
                    name='urlReview'
                    type='text'
                    value={this.state.urlReview}
                  />
                </Form>
                <Form>
                  <label>urlBackground</label>
                  <input
                    placeholder='urlReurlBackgroundview'
                    onChange={this.handleChange}
                    name='urlBackground'
                    type='text'
                    value={this.state.urlBackground}
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
