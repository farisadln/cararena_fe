import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card, Form, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class brandTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: [],
    }
  }

  componentDidMount() {
    const API_URL = fetch('http://127.0.0.1:4000/api/brand')

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
      fetch('http://127.0.0.1:4000/api/brand/' + id, {
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
      <Container fluid>
        <Col md={{ span: 3, offset: 3 }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Brand Mobil</th>
                <th>Logo Url</th>
                <th>Created At</th>
                <th>Delete</th>
              </tr>
            </thead>
            {this.state.content.length > 0 ? (
              this.state.content.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.carBrand}</td>
                  <td>{data.logoUrl}</td>
                  <td>{data.createdAt}</td>
                  <td>
                    <Button
                      className='btn btn-block'
                      variant='danger'
                      onClick={() => this.deleteBrand(data.id)}
                    >
                      Delete
                    </Button>

                    <Link to={'/put/' + data.id}>
                      <Button
                        className='btn btn-block'
                        variant='primary'
                        onClick={data.id}
                      >
                        Edit
                      </Button>{' '}
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>No users</td>
              </tr>
            )}
          </Table>
        </Col>
      </Container>
    )
  }
}
