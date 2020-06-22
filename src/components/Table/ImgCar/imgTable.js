import React, { Component } from 'react'

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
import { Link } from 'react-router-dom'

export default class imgCar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: [],
    }
  }

  componentDidMount() {
    const API_URL = fetch('http://139.162.28.184:4000/api/img')

    API_URL.then((res) => {
      if (res.status === 200) return res.json()
    }).then((resJson) => {
      this.setState({
        content: resJson,
      })
    })
  }
  render() {
    return (
      <Sidebar.Pushable className="top-section pusher" as={Segment}>
        <SidebarExampleVisible/>

        <Sidebar.Pusher>
          <div className='four-hundred-width'>
            <Table celled fixed singleLine>
              <Table.Header fullWidth>
                <Table.Row>

                  <Table.HeaderCell colSpan='6'>
                    <Link to={'/brandForm/'}>
                      <Button
                        floated='left'
                        icon
                        labelPosition='right'
                        positive
                      >
                        <Icon name='pencil alternate' />
                        Add Data
                      </Button>
                    </Link>
                  </Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                  <Table.HeaderCell className="size-table"> Id</Table.HeaderCell>
                  <Table.HeaderCell >Url Img1</Table.HeaderCell>
                  <Table.HeaderCell >Url Img2</Table.HeaderCell>
                  <Table.HeaderCell >Url Img3</Table.HeaderCell>
                  <Table.HeaderCell>Created At</Table.HeaderCell>
                  <Table.HeaderCell textAlign='center'>
                    Action
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {this.state.content.length > 0 ? (
                  this.state.content.map((data) => (
                    <tr key={data.id}>
                      <Table.Cell >{data.id}</Table.Cell>
                      <Table.Cell >{data.img1}</Table.Cell>
                      <Table.Cell>{data.img2}</Table.Cell>
                      <Table.Cell>{data.img3}</Table.Cell>
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
    )
  }
}
