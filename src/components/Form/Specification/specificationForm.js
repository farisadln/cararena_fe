import React, { Component } from 'react'

import { Button, Checkbox, Form, Sidebar, Segment, Header } from 'semantic-ui-react'
import SidebarExampleVisible from '../../Layout/SidebarExampleVisible'

export default class sopecificationForm extends Component {
    constructor() {
        super()
        this.state = {
          kapasistasMesin: '',
          jmlSilinder: '',
          jmlKatup: '',
          drivetrain:'',
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
            <Sidebar.Pusher className='four-hundred-width'>
            <Header as='h2'>
              Spesifikasi Data
              <Header.Subheader>
              
              </Header.Subheader>
            </Header>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <label>kapasistasMesin</label>
                  <input
                    placeholder='kapasistasMesin'
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
                  />
                </Form.Field>
                <Form.Field>
                  <label>jmlKatup</label>
                  <input
                    placeholder='jmlKatup'
                    onChange={this.handleChange}
                    name='jmlKatup'
                  />
                </Form.Field>
                <Form.Field>
                  <label>drivetrain</label>
                  <input
                    placeholder='drivetrain'
                    onChange={this.handleChange}
                    name='drivetrain'
                  />
                </Form.Field>
                <Form.Field>
                  <label>maxTenaga</label>
                  <input
                    placeholder='maxTenaga'
                    onChange={this.handleChange}
                    name='maxTenaga'
                  />
                </Form.Field>
                <Form.Field>
                  <label>maxTorsi</label>
                  <input
                    placeholder='maxTorsi'
                    onChange={this.handleChange}
                    name='maxTorsi'
                  />
                </Form.Field>
                <Form.Field>
                  <label>jenisBahanBakar</label>
                  <input
                    placeholder='jenisBahanBakar'
                    onChange={this.handleChange}
                    name='jenisBahanBakar'
                  />
                </Form.Field>
                <Form.Field>
                  <label>kapasitasBahanBakar</label>
                  <input
                    placeholder='kapasitasBahanBakar'
                    onChange={this.handleChange}
                    name='kapasitasBahanBakar'
                  />
                </Form.Field>
                <Form.Field>
                  <label>banLebar</label>
                  <input
                    placeholder='banLebar'
                    onChange={this.handleChange}
                    name='banLebar'
                  />
                </Form.Field>
                <Form.Field>
                  <label>banAspekRasio</label>
                  <input
                    placeholder='banAspekRasio'
                    onChange={this.handleChange}
                    name='banAspekRasio'
                  />
                </Form.Field>
                <Form.Field>
                  <label>banDiameter</label>
                  <input
                    placeholder='banDiameter'
                    onChange={this.handleChange}
                    name='banDiameter'
                  />
                </Form.Field>
                <Form.Field>
                  <label>suspensiDepan</label>
                  <input
                    placeholder='suspensiDepan'
                    onChange={this.handleChange}
                    name='suspensiDepan'
                  />
                </Form.Field>
                <Form.Field>
                  <label>suspensiBelakang</label>
                  <input
                    placeholder='suspensiBelakang'
                    onChange={this.handleChange}
                    name='suspensiBelakang'
                  />
                </Form.Field>
                <Form.Field>
                  <label>tipeTransmisi</label>
                  <input
                    placeholder='tipeTransmisi'
                    onChange={this.handleChange}
                    name='tipeTransmisi'
                  />
                </Form.Field>
                <Form.Field>
                  <label>tipeGearBox</label>
                  <input
                    placeholder='tipeGearBox'
                    onChange={this.handleChange}
                    name='tipeGearBox'
                  />
                </Form.Field>
                <Form.Field>
                  <label>dimensiPanjang</label>
                  <input
                    placeholder='dimensiPanjang'
                    onChange={this.handleChange}
                    name='dimensiPanjang'
                  />
                </Form.Field>
                <Form.Field>
                  <label>dimanesiLebar</label>
                  <input
                    placeholder='dimanesiLebar'
                    onChange={this.handleChange}
                    name='dimanesiLebar'
                  />
                </Form.Field>
                <Form.Field>
                  <label>dimensiTinggi</label>
                  <input
                    placeholder='dimensiTinggi'
                    onChange={this.handleChange}
                    name='dimensiTinggi'
                  />
                </Form.Field>
                <Form.Field>
                  <label>dimensiSumbuRoda</label>
                  <input
                    placeholder='dimensiSumbuRoda'
                    onChange={this.handleChange}
                    name='dimensiSumbuRoda'
                  />
                </Form.Field>
                <Form.Field>
                  <label>dimensiGroundClearance</label>
                  <input
                    placeholder='dimensiGroundClearance'
                    onChange={this.handleChange}
                    name='dimensiGroundClearance'
                  />
                </Form.Field>
                <Form.Field>
                  <label>dimensiBerat</label>
                  <input
                    placeholder='dimensiBerat'
                    onChange={this.handleChange}
                    name='dimensiBerat'
                  />
                </Form.Field>
                <Form.Field>
                  <label>dimensiKargo</label>
                  <input
                    placeholder='dimensiKargo'
                    onChange={this.handleChange}
                    name='dimensiKargo'
                  />
                </Form.Field>
                <Form.Field>
                  <label>jmlPintu</label>
                  <input
                    placeholder='jmlPintu'
                    onChange={this.handleChange}
                    name='jmlPintu'
                  />
                </Form.Field>
                <Form.Field>
                  <label>jmlKursi</label>
                  <input
                    placeholder='jmlKuris'
                    onChange={this.handleChange}
                    name='jmlKuris'
                  />
                </Form.Field>
                <Form.Field>
                  <label>generalId</label>
                  <input
                    placeholder='generalId'
                    onChange={this.handleChange}
                    name='generalId'
                  />
                </Form.Field>

                <Button variant='primary' value='Add' type='submit'>
                  Submit
                </Button>
              </Form>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        )
      }

}
