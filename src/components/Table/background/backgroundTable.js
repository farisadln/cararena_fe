import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import {
  Button,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Table,
  Grid,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css'
import '../table.css'
import SidebarExampleVisible from '../../Layout/SidebarExampleVisible'

export default class backgroundTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: [],
    }
  }

  componentDidMount() {
      const API_URL = fetch('http://127.0.0.1:4000/api/backgrounds')

    API_URL.then((res) => {
      if (res.status === 200) return res.json()
    }).then((resJson) => {
      this.setState({
        content: resJson,
      })
    })
  }

  deleteBrand(id) {
    if (window.confirm('Hapus neh?')) {
      fetch('http://127.0.0.1:4000/api/backgrounds/' + id, {
        method: 'DELETE',
        header: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
    }
  }

  render() {
    return (
      <div>
        <Sidebar.Pushable className="top-section pusher" as={Segment}>
          <SidebarExampleVisible/>

          <Sidebar.Pusher>
            <div className='two-hundred-width'>
              <Table className='two-hundred-width' celled compact definition>
                <Table.Header fullWidth>
                  <Table.Row>

                    <Table.HeaderCell colSpan='4'>
                      <Link to={'/brandForm/'}>
                        <Button
                          floated='left'
                          icon
                          labelPosition='right'
                          positive
                        >
                          <Icon name='pencil alternate' />
                          Add Brand
                        </Button>
                      </Link>
                    </Table.HeaderCell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell >Id</Table.HeaderCell>
                    <Table.HeaderCell >Background url_img1</Table.HeaderCell>
                    <Table.HeaderCell>Background url_img2</Table.HeaderCell>
                    <Table.HeaderCell>Background url_img3</Table.HeaderCell>
                    <Table.HeaderCell>Created At</Table.HeaderCell>
                    <Table.HeaderCell  textAlign='center'>
                      Action
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {this.state.content.length > 0 ? (
                    this.state.content.map((data) => (
                      <tr key={data.id}>
                        <Table.Cell >{data.id}</Table.Cell>
                        <Table.Cell >{data.url_img1}</Table.Cell>
                        <Table.Cell>{data.url_img2}</Table.Cell>
                        <Table.Cell>{data.url_img3}</Table.Cell>
                        <Table.Cell>{data.createdAt}</Table.Cell>
                        <Table.Cell textAlign='center'>
                          <Button
                            className='button-size'
                            color='red'
                            attached='left'
                            onClick={() => this.deleteBrand(data.id)}
                          >
                            Delete
                          </Button>
                          <Link to={'/put/' + data.id}>
                            <Button
                              className='button-size'
                              color='blue'
                              Button
                              attached='right'
                              onClick={data.id}
                            >
                              Edit
                            </Button>
                          </Link>
                        </Table.Cell>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3}>No users</td>
                    </tr>
                  )}
                </Table.Body>
              </Table>
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
