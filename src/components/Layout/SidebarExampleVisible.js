import React, { Component } from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import './sidebar.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default class SidebarExampleVisible extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Sidebar
        className='top-section'
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        vertical
        visible
        width='thin'
      >
        <Menu.Item>
          <Menu.Header>Cars</Menu.Header>

          <Menu.Menu>
            <Link to={'/dasborad/'}>
              <Menu.Item
                name='Dasboard'
                active={activeItem === 'enterprise'}
                onClick={this.handleItemClick}
              />
            </Link>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Data Table</Menu.Header>

          <Menu.Menu>
            <Link to={'/backgroundTable/'}>
              <Menu.Item
                name='Background'
                active={activeItem === 'Background'}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to={'/brandTable/'}>
              <Menu.Item
                name='brand'
                active={activeItem === 'brand'}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to={'/generalTable/'}>
              <Menu.Item
                name='general'
                active={activeItem === 'general'}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to={'/specificationTable/'}>
              <Menu.Item
                name='specification'
                active={activeItem === 'specification'}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to={'/imgCarsTable/'}>
              <Menu.Item
                name='imgCar'
                active={activeItem === 'imgCar'}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to={'/review'}>
              <Menu.Item
                name='review'
                active={activeItem === 'review'}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to={'/review'}>
              <Menu.Item
                name='urlScrap'
                active={activeItem === 'urlScrap'}
                onClick={this.handleItemClick}
              />
            </Link>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Manage User</Menu.Header>

          <Menu.Menu>
            <Link to={'/userGet'}>
              <Menu.Item
                name='Change Password'
                active={activeItem === 'Change Password'}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to={'/addAdmin/'}>
              <Menu.Item
                name='Add Admin'
                active={activeItem === 'Add Admin'}
                onClick={this.handleItemClick}
              />
            </Link>

          </Menu.Menu>
        </Menu.Item>
      </Sidebar>
    )
  }
}
