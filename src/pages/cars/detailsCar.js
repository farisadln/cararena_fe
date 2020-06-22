import React, { Component, useState, useEffect } from 'react'
import { withRouter } from 'react-router'




import { Link } from 'react-router-dom'
import {
  Button,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Table,
  Grid,
  Form,
  Input,
  Responsive,
  Divider,Image

} from 'semantic-ui-react'


import 'semantic-ui-css/semantic.css'
import SidebarExampleVisible from '../../components/Layout/SidebarExampleVisible'


export default class detailsCar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: [],
    }
  }

  componentDidMount() {
    var pathArray = window.location.pathname.split('/')[2]
    const API_URL = fetch('http://127.0.0.1:4000/api/brand/cars/' + pathArray)

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
      <Sidebar.Pushable className='top-section pusher' as={Segment}>
        <SidebarExampleVisible />

        <Sidebar.Pusher className='four-hundred-width'>
          <Segment>
            {this.state.content.length > 0 ? (
              this.state.content.map((data) => (
                <Table celled structured>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Img1</Table.Cell>
                      <Table.Cell>
                        <Image src={data.img1} size='tiny' />
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Img2</Table.Cell>
                      <Table.Cell>
                        <Image src={data.img2} size='tiny' />
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Img3</Table.Cell>
                      <Table.Cell>
                        <Image src={data.img3} size='tiny' />
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Tipe Mobil</Table.Cell>
                      <Table.Cell>{data.type}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Harga OTR</Table.Cell>
                      <Table.Cell>{data.harga_otr}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Kapasistas Mesin</Table.Cell>
                      <Table.Cell>{data.kapasistasMesin}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Jumlah Katup</Table.Cell>
                      <Table.Cell>{data.jmlKatup}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Tenaga Maximal</Table.Cell>
                      <Table.Cell>{data.maxTenaga}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Jenis Bahanbakar</Table.Cell>
                      <Table.Cell>{data.jenisBahanBakar}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Kapasistas Bahan Bakar</Table.Cell>
                      <Table.Cell>{data.kapasitasBahanBakar}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Suspensi Depan</Table.Cell>
                      <Table.Cell>{data.suspensiDepan}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Suspensi Belakang</Table.Cell>
                      <Table.Cell>{data.suspensiBelakang}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Tiper Transmisi</Table.Cell>
                      <Table.Cell>{data.tipeTransmisi}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Tipe Gear Box</Table.Cell>
                      <Table.Cell>{data.tipeGearBox}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Dimensi Panjang</Table.Cell>
                      <Table.Cell>{data.dimensiPanjang}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Dimensi Roda</Table.Cell>
                      <Table.Cell>{data.dimensiSumbuRoda}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>GroundClearance</Table.Cell>
                      <Table.Cell>{data.dimensiGroundClearance}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Dimensi Kargo</Table.Cell>
                      <Table.Cell>{data.dimensiBerat}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Jumlah Pintu</Table.Cell>
                      <Table.Cell>{data.jmlPintu}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Jumlah Kuris</Table.Cell>
                      <Table.Cell>{data.jmlKuris}</Table.Cell>
                    </Table.Row>



                  </Table.Body>
                </Table>
              ))
            ) : (
              <tr>
                <td colSpan={3}>No users</td>
              </tr>
            )}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}
