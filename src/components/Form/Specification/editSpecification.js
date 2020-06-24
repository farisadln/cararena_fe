import React, { Component, useState, useEffect } from 'react'
import { withRouter } from 'react-router'

import { Button, Checkbox, Form, Sidebar, Segment, Header } from 'semantic-ui-react'
import SidebarExampleVisible from '../../Layout/SidebarExampleVisible'
export default class editSpecification extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      kapasistasMesin: this.props.kapasistasMesin,
      jmlSilinder: this.props.jmlSilinder,
      jmlKatup: this.props.jmlKatup,
      drivetrain:this.props.drivetrain,
      maxTenaga: this.props.maxTenaga,
      maxTorsi: this.props.maxTorsi,
      jenisBahanBakar: this.props.jenisBahanBakar,
      kapasitasBahanBakar: this.props.kapasitasBahanBakar,
      banLebar: this.props.banLebar,
      banAspekRasio: this.props.banAspekRasio,
      banDiameter: this.props.banDiameter,
      suspensiDepan: this.props.suspensiDepan,
      suspensiBelakang: this.props.suspensiBelakang,
      tipeTransmisi: this.props.tipeTransmisi,
      tipeGearBox: this.props.tipeGearBox,
      dimensiPanjang: this.props.dimensiPanjang,
      dimanesiLebar: this.props.dimanesiLebar,
      dimensiTinggi: this.props.dimensiTinggi,
      dimensiSumbuRoda: this.props.dimensiSumbuRoda,
      dimensiGroundClearance: this.props.dimensiGroundClearance,
      dimensiBerat: this.props.dimensiBerat,
      dimensiKargo: this.props.dimensiKargo,
      jmlPintu: this.props.jmlPintu,
      jmlKuris: this.props.jmlKuris,
      generalId: this.props.generalId
    }
  }

  componentDidMount(props) {
    var pathArray = window.location.pathname.split('/')[2]
    console.log(pathArray)
    const API_URL = fetch('http://139.162.28.184:4000/api/specification/' + pathArray)

    API_URL.then((res) => {
      if (res.status === 200) return res.json()
    }).then((resJson) => {
      this.setState({
        id: resJson.id,
        kapasistasMesin: resJson.kapasistasMesin,
        jmlSilinder: resJson.jmlSilinder,
        jmlKatup: resJson.jmlKatup,
        drivetrain:resJson.drivetrain,
        maxTenaga: resJson.maxTenaga,
        maxTorsi: resJson.maxTorsi,
        jenisBahanBakar: resJson.jenisBahanBakar,
        kapasitasBahanBakar: resJson.kapasitasBahanBakar,
        banLebar: resJson.banLebar,
        banAspekRasio: resJson.banAspekRasio,
        banDiameter: resJson.banDiameter,
        suspensiDepan: resJson.suspensiDepan,
        suspensiBelakang: resJson.suspensiBelakang,
        tipeTransmisi: resJson.tipeTransmisi,
        tipeGearBox: resJson.tipeGearBox,
        dimensiPanjang: resJson.dimensiPanjang,
        dimanesiLebar: resJson.dimanesiLebar,
        dimensiTinggi: resJson.dimensiTinggi,
        dimensiSumbuRoda: resJson.dimensiSumbuRoda,
        dimensiGroundClearance: resJson.dimensiGroundClearance,
        dimensiBerat: resJson.dimensiBerat,
        dimensiKargo: resJson.dimensiKargo,
        jmlPintu: resJson.jmlPintu,
        jmlKuris: resJson.jmlKuris,
        generalId: resJson.generalId
      })
    })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    var pathArray = window.location.pathname.split('/')[2]
    event.preventDefault()
    const url = 'http://139.162.28.184:4000/api/specification/' + pathArray

    const data = {
      id: this.state.id,
      kapasistasMesin: this.state.kapasistasMesin,
      jmlSilinder: this.state.jmlSilinder,
      jmlKatup: this.state.jmlKatup,
      drivetrain: this.state.drivetrain,
      maxTenaga: this.state.maxTenaga,
      maxTorsi: this.state.maxTorsi,
      jenisBahanBakar: this.state.jenisBahanBakar,
      kapasitasBahanBakar: this.state.kapasistasMesin,
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
      method: 'PUT',
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
        <Sidebar.Pusher className='four-hundred-width'>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <label>Id</label>
                  <input
                    placeholder='Id'
                    value={this.state.id}
                    disabled
                    name='id'
                  />
                </Form.Field>
                  <Form.Field>
                    <label>kapasistasMesin</label>
                    <input
                      placeholder='kapasistasMesin'
                      value={this.state.kapasistasMesin}
                      onChange={this.handleChange}
                      name='kapasistasMesin'
                    />
                  </Form.Field>


                <Form.Field>
                  <label>jmlSilinder</label>
                  <input
                    placeholder='jmlSilinder'
                    onChange={this.handleChange}
                    name='jmlSilinder'
                    type='text'
                    value={this.state.jmlSilinder}
                  />
                </Form.Field>
                <Form.Field>
                  <label>jmlKatup</label>
                  <input
                    placeholder='jmlKatup'
                    onChange={this.handleChange}
                    value={this.state.jmlKatup}
                    name='jmlKatup'
                  />
                </Form.Field>
                <Form.Field>
                  <label>drivetrain</label>
                  <input
                    placeholder='drivetrain'
                    onChange={this.handleChange}
                    value={this.state.drivetrain}
                    name='drivetrain'
                  />
                </Form.Field>
                <Form.Field>
                  <label>maxTenaga</label>
                  <input
                    placeholder='maxTenaga'
                    onChange={this.handleChange}
                    value={this.state.maxTenaga}
                    name='maxTenaga'
                  />
                </Form.Field>
                <Form.Field>
                  <label>maxTorsi</label>
                  <input
                    placeholder='maxTorsi'
                    onChange={this.handleChange}
                    value={this.state.maxTorsi}
                    name='maxTorsi'
                  />
                </Form.Field>
                <Form.Field>
                  <label>jenisBahanBakar</label>
                  <input
                    placeholder='jenisBahanBakar'
                    onChange={this.handleChange}
                    value={this.state.jenisBahanBakar}
                    name='jenisBahanBakar'
                  />
                </Form.Field>
                <Form.Field>
                  <label>kapasitasBahanBakar</label>
                  <input
                    placeholder='kapasitasBahanBakar'
                    onChange={this.handleChange}
                    value={this.state.kapasitasBahanBakar}
                    name='kapasitasBahanBakar'
                  />
                </Form.Field>
                <Form.Field>
                  <label>banLebar</label>
                  <input
                    placeholder='banLebar'
                    onChange={this.handleChange}
                    value={this.state.banLebar}
                    name='banLebar'
                  />
                </Form.Field>
                <Form.Field>
                  <label>banAspekRasio</label>
                  <input
                    placeholder='banAspekRasio'
                    onChange={this.handleChange}
                    value={this.state.banAspekRasio}
                    name='banAspekRasio'
                  />
                </Form.Field>
                <Form.Field>
                  <label>Band Diameter</label>
                  <input
                    placeholder='banDiameter'
                    onChange={this.handleChange}
                    value={this.state.banDiameter}
                    name='banDiameter'
                  />
                </Form.Field>
                <Form.Field>
                  <label>suspensiDepan</label>
                  <input
                    placeholder='suspensiDepan'
                    onChange={this.handleChange}
                    value={this.state.suspensiDepan}
                    name='suspensiDepan'
                  />
                </Form.Field>
                <Form.Field>
                  <label>suspensiBelakang</label>
                  <input
                    placeholder='suspensiBelakang'
                    onChange={this.handleChange}
                    value={this.state.suspensiBelakang}
                    name='suspensiBelakang'
                  />
                </Form.Field>
                <Form.Field>
                  <label>tipeTransmisi</label>
                  <input
                    placeholder='tipeTransmisi'
                    onChange={this.handleChange}
                    value={this.state.tipeTransmisi}
                    name='tipeTransmisi'
                  />
                </Form.Field>
                <Form.Field>
                  <label>tipeGearBox</label>
                  <input
                    placeholder='tipeGearBox'
                    onChange={this.handleChange}
                    value={this.state.tipeGearBox}
                    name='tipeGearBox'
                  />
                </Form.Field>
                <Form.Field>
                  <label>dimensiPanjang</label>
                  <input
                    placeholder='dimensiPanjang'
                    onChange={this.handleChange}
                    value={this.state.dimensiPanjang}
                    name='dimensiPanjang'
                  />
                </Form.Field>
                <Form.Field>
                  <label>dimanesiLebar</label>
                  <input
                    placeholder='dimanesiLebar'
                    onChange={this.handleChange}
                    value={this.state.dimanesiLebar}
                    name='dimanesiLebar'
                  />
                </Form.Field>
                <Form.Field>
                  <label>dimensiTinggi</label>
                  <input
                    placeholder='dimensiTinggi'
                    onChange={this.handleChange}
                    value={this.state.dimensiTinggi}
                    name='dimensiTinggi'
                  />
                </Form.Field>
                <Form.Field>
                  <label>dimensiSumbuRoda</label>
                  <input
                    placeholder='dimensiSumbuRoda'
                    onChange={this.handleChange}
                    value={this.state.dimensiSumbuRoda}
                    name='dimensiSumbuRoda'
                  />
                </Form.Field>
                <Form.Field>
                  <label>dimensiGroundClearance</label>
                  <input
                    placeholder='dimensiGroundClearance'
                    onChange={this.handleChange}
                    value={this.state.dimensiGroundClearance}
                    name='dimensiGroundClearance'
                  />
                </Form.Field>
                <Form.Field>
                  <label>dimensiBerat</label>
                  <input
                    placeholder='dimensiBerat'
                    onChange={this.handleChange}
                    value={this.state.dimensiBerat}
                    name='dimensiBerat'
                  />
                </Form.Field>
                <Form.Field>
                  <label>dimensiKargo</label>
                  <input
                    placeholder='dimensiKargo'
                    onChange={this.handleChange}
                    value={this.state.dimensiKargo}
                    name='dimensiKargo'
                  />
                </Form.Field>
                <Form.Field>
                  <label>jmlPintu</label>
                  <input
                    placeholder='jmlPintu'
                    onChange={this.handleChange}
                    value={this.state.jmlPintu}
                    name='jmlPintu'
                  />
                </Form.Field>
                <Form.Field>
                  <label>jmlKursi</label>
                  <input
                    placeholder='jmlKursi'
                    onChange={this.handleChange}
                    value={this.state.jmlKuris}
                    name='jmlKuris'
                  />
                </Form.Field>
                <Form.Field>
                  <label>generalId</label>
                  <input
                    placeholder='generalId'
                    onChange={this.handleChange}
                    value={this.state.generalId}
                    name='generalId'
                  />
                </Form.Field>
                <Button variant='primary' value='Add' type='submit'>
                  Update
                </Button>
              </Form>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}
