import React, { Component } from 'react'
import Sidebar from '../board/sidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, CardColumns, Container } from 'react-bootstrap'

export default class cars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: [],
    }
  }

  componentDidMount() {
    const API_URL = fetch('http://139.162.28.184:4000/api/brand/cars')

    API_URL.then((res) => {
      if (res.status === 200) return res.json()
    }).then((resJson) => {
      this.setState({
        content: resJson,
      })
      console.log(this.state.content.length)
    })
  }
  render() {
    return (
      <Container fluid>
        <CardColumns style={{ width: '60rem' }}>
          {this.state.content.length > 0 ? (
            this.state.content.map((data) => (
              <Card>
                <Card.Img variant='top' src={data.img1} />
                <Card.Body>
                  <Card.Title>{data.type}</Card.Title>
                  <Card.Text>{data.harga_otr}</Card.Text>
                </Card.Body>
                <Button variant='primary'>Details</Button>
              </Card>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}
        </CardColumns>
      </Container>
    )
  }
}
