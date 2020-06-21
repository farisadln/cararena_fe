import React, { Component } from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import './sidebar.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class SidebarExampleVisible extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Sidebar
        className="top-section"
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
            <Link to={'/dasborad'}>
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
            <Menu.Item
              name='Background'
              active={activeItem === 'rails'}
              onClick={this.handleItemClick}
            />
            <Link to={'/brandTable/'}>
            <Menu.Item
              name='brand'
              active={activeItem === 'python'}
              onClick={this.handleItemClick}
            />
            </Link>
            <Menu.Item
              name='general'
              active={activeItem === 'php'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='specification'
              active={activeItem === 'php'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='imgCar'
              active={activeItem === 'php'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='review'
              active={activeItem === 'php'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Manage User</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='Change Password'
              active={activeItem === 'shared'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Add Admin'
              active={activeItem === 'shared'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>
      </Sidebar>
    )
  }
}
