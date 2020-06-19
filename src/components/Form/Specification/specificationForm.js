import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'

export default class specificationFrom extends Component {
  constructor() {
    super()
    this.state = {
      kapasistasMesin: '',
      jmlSilinder: '',
      jmlKatup: '',
      drivetrain: '',
      maxTenaga: '',
      maxTorsi: '',
      jenisBahanBakar: '',
      kapasitasBahanBakar: '',
      banLebar: '',
      banAspekRasio: '',
      banDiameter: '',
      suspensiDepan: '',
      suspensiBelakang: '',
      tipeTransmisi: '',
      tipeGearBox: '',
      dimensiPanjang: '',
      dimanesiLebar: '',
      dimensiTinggi: '',
      dimensiSumbuRoda: '',
      dimensiGroundClearance: '',
      dimensiBerat: '',
      dimensiKargo: '',
      jmlPintu: '',
      jmlKuris: '',
      generalId: '',
    }
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const url = 'http://127.0.0.1:4000/api/specification'
    const data = {
      kapasistasMesin: this.state.kapasistasMesin,
      jmlSilinder: this.state.jmlSilinder,
      jmlKatup: this.state.jmlKatup,
      drivetrain: this.state.drivetrain,
      maxTenaga: this.state.maxTenaga,
      maxTorsi: this.state.maxTorsi,
      jenisBahanBakar: this.state.jenisBahanBakar,
      kapasitasBahanBakar: this.state.kapasitasBahanBakar,
      banLebar: this.state.banLebar,
      banAspekRasio: this.state.banAspekRasio,
      banDiameter: this.state.banDiameter,
      suspensiDepan: this.state.suspensiDepan,
      suspensiBelakang: this.state.suspensiBelakang,
      tipeTransmisi: this.state.tipeTransmisi,
      tipeGearBox: this.state.tipeGearBox,
      dimensiPanjang: this.state.dimensiPanjang,
      dimanesiLebar: this.state.dimanesiLebar,
      dimensiTinggi: this.state.dimensiTinggi,
      dimensiSumbuRoda: this.state.dimensiSumbuRoda,
      dimensiGroundClearance: this.state.dimensiGroundClearance,
      dimensiBerat: this.state.dimensiBerat,
      dimensiKargo: this.state.dimensiKargo,
      jmlPintu: this.state.jmlPintu,
      jmlKuris: this.state.jmlKuris,
      generalId: this.state.generalId,
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
      <Container fluid>
        <Row>
          <div className='col-md-12'>
            <Col md={{ span: 7, offset: 3 }}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label>kapasistasMesin</Form.Label>
                  <Form.Control
                    placeholder='Tipe Mobil'
                    onChange={this.handleChange}
                    name='kapasistasMesin'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>jmlSilinder</Form.Label>
                  <Form.Control
                    placeholder='jmlSilinder'
                    onChange={this.handleChange}
                    name='jmlSilinder:'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>jmlKatup</Form.Label>
                  <Form.Control
                    placeholder='jmlKatup'
                    onChange={this.handleChange}
                    name='jmlKatup'
                  />
                </Form.Group>
               
                <Form.Group>
                  <Form.Label>drivetrain</Form.Label>
                  <Form.Control
                    placeholder='drivetrain'
                    onChange={this.handleChange}
                    name='drivetrain'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>maxTenaga</Form.Label>
                  <Form.Control
                    placeholder='maxTenaga'
                    onChange={this.handleChange}
                    name='maxTenaga'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>maxTorsi</Form.Label>
                  <Form.Control
                    placeholder='maxTorsi'
                    onChange={this.handleChange}
                    name='maxTorsi'
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>jenisBahanBakar</Form.Label>
                  <Form.Control
                    placeholder='jenisBahanBakar'
                    onChange={this.handleChange}
                    name='jenisBahanBakar'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>kapasitasBahanBakar</Form.Label>
                  <Form.Control
                    placeholder='kapasitasBahanBakar'
                    onChange={this.handleChange}
                    name='kapasitasBahanBakar'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>banLebar</Form.Label>
                  <Form.Control
                    placeholder='banLebar'
                    onChange={this.handleChange}
                    name='banLebar'
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>banAspekRasio</Form.Label>
                  <Form.Control
                    placeholder='Tipe Mobil'
                    onChange={this.handleChange}
                    name='banAspekRasio'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>banDiameter</Form.Label>
                  <Form.Control
                    placeholder='banDiameter'
                    onChange={this.handleChange}
                    name='banDiameter'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>suspensiDepan</Form.Label>
                  <Form.Control
                    placeholder='suspensiDepan'
                    onChange={this.handleChange}
                    name='suspensiDepan'
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>suspensiBelakang</Form.Label>
                  <Form.Control
                    placeholder='suspensiBelakang'
                    onChange={this.handleChange}
                    name='suspensiBelakang'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>tipeTransmisi</Form.Label>
                  <Form.Control
                    placeholder='tipeTransmisi'
                    onChange={this.handleChange}
                    name='tipeTransmisi'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>tipeGearBox</Form.Label>
                  <Form.Control
                    placeholder='tipeGearBox'
                    onChange={this.handleChange}
                    name='tipeGearBox'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>dimensiPanjang</Form.Label>
                  <Form.Control
                    placeholder='dimensiPanjang'
                    onChange={this.handleChange}
                    name='dimensiPanjang'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>dimanesiLebar</Form.Label>
                  <Form.Control
                    placeholder='dimanesiLebar'
                    onChange={this.handleChange}
                    name='dimanesiLebar'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>dimensiTinggi</Form.Label>
                  <Form.Control
                    placeholder='dimensiTinggi'
                    onChange={this.handleChange}
                    name='dimensiTinggi'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>dimensiSumbuRoda</Form.Label>
                  <Form.Control
                    placeholder='dimensiSumbuRoda'
                    onChange={this.handleChange}
                    name='dimensiSumbuRoda'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>dimensiGroundClearance</Form.Label>
                  <Form.Control
                    placeholder='dimensiGroundClearance'
                    onChange={this.handleChange}
                    name='dimensiGroundClearance'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>dimensiBerat</Form.Label>
                  <Form.Control
                    placeholder='dimensiBerat'
                    onChange={this.handleChange}
                    name='dimensiBerat'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>dimensiKargo</Form.Label>
                  <Form.Control
                    placeholder='dimensiKargo'
                    onChange={this.handleChange}
                    name='dimensiKargo'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>jmlPintu</Form.Label>
                  <Form.Control
                    placeholder='jmlPintu'
                    onChange={this.handleChange}
                    name='jmlPintu'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>jmlKursi</Form.Label>
                  <Form.Control
                    placeholder='jmlKursi'
                    onChange={this.handleChange}
                    name='jmlKuris'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>generalId</Form.Label>
                  <Form.Control
                    placeholder='generalId'
                    onChange={this.handleChange}
                    name='generalId'
                  />
                </Form.Group>





                <Button variant='primary' value='Add' type='submit'>
                  Submit
                </Button>
              </Form>
            </Col>
          </div>
        </Row>
      </Container>
    )
  }
}
