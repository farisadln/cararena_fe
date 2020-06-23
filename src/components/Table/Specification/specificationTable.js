import React, { Component } from "react";


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

export default class specification extends Component{
    state = {
        content: [],
      };


    componentDidMount() {

        const API_URL = fetch('http://127.0.0.1:4000/api/specification');

        API_URL.then(res => {
            if(res.status === 200)
                return res.json()
        }).then( resJson => {
            this.setState({
                content : resJson
            })
        })




        }
        render(){
            return(
              <Sidebar.Pushable className="top-section pusher" as={Segment}>
                <SidebarExampleVisible/>

                <Sidebar.Pusher>
                  <div className='two-hundred-width'>
                    <Table className='two-hundred-width' celled compact definition fixed>
                      <Table.Header fullWidth>
                        <Table.Row>
                          <Table.HeaderCell />
                          <Table.HeaderCell colSpan='28'>
                            <Link to={'/specificationForm/'}>
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
                          <Table.HeaderCell>Id</Table.HeaderCell>
                          <Table.HeaderCell>kapasistasMesin</Table.HeaderCell>
                          <Table.HeaderCell>jmlSilinder</Table.HeaderCell>
                          <Table.HeaderCell>jmlKatup</Table.HeaderCell>
                          <Table.HeaderCell>maxTenaga</Table.HeaderCell>
                          <Table.HeaderCell>maxTorsi</Table.HeaderCell>
                          <Table.HeaderCell>jenisBahanBakar</Table.HeaderCell>
                          <Table.HeaderCell>kapasitasBahanBakar</Table.HeaderCell>
                          <Table.HeaderCell>banLebar</Table.HeaderCell>
                          <Table.HeaderCell>banAspekRasio</Table.HeaderCell>
                          <Table.HeaderCell>banDiameter</Table.HeaderCell>
                          <Table.HeaderCell>suspensiDepan</Table.HeaderCell>
                          <Table.HeaderCell>suspensiBelakang</Table.HeaderCell>
                          <Table.HeaderCell>tipeTransmisi</Table.HeaderCell>
                          <Table.HeaderCell>tipeGearBox</Table.HeaderCell>
                          <Table.HeaderCell>dimensiPanjang</Table.HeaderCell>
                          <Table.HeaderCell>dimanesiLebar</Table.HeaderCell>
                          <Table.HeaderCell>dimensiTinggi</Table.HeaderCell>
                          <Table.HeaderCell>dimensiSumbuRoda</Table.HeaderCell>
                          <Table.HeaderCell>dimensiGroundClearance</Table.HeaderCell>
                          <Table.HeaderCell>dimensiBerat</Table.HeaderCell>
                          <Table.HeaderCell>dimensiKargo</Table.HeaderCell>
                          <Table.HeaderCell>jmlPintu</Table.HeaderCell>
                          <Table.HeaderCell>jmlKusis</Table.HeaderCell>
                          <Table.HeaderCell>generalId</Table.HeaderCell>
                          <Table.HeaderCell>date Created</Table.HeaderCell>
                          <Table.HeaderCell>generalId</Table.HeaderCell>


                          <Table.HeaderCell textAlign='center'>
                            Action
                          </Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>

                      <Table.Body>
                        {this.state.content.length > 0 ? (
                          this.state.content.map((data) => (
                            <tr key={data.id}>
                              <Table.Cell>{data.id}</Table.Cell>
                              <Table.Cell>{data.kapasistasMesin}</Table.Cell>
                              <Table.Cell>{data.jmlSilinder}</Table.Cell>
                              <Table.Cell>{data.jmlKatup}</Table.Cell>
                              <Table.Cell>{data.drivetrain}</Table.Cell>
                              <Table.Cell>{data.maxTenaga}</Table.Cell>
                              <Table.Cell>{data.maxTorsi}</Table.Cell>
                              <Table.Cell>{data.jenisBahanBakar}</Table.Cell>
                              <Table.Cell>{data.kapasitasBahanBakar}</Table.Cell>
                              <Table.Cell>{data.banLebar}</Table.Cell>
                              <Table.Cell>{data.banAspekRasio}</Table.Cell>
                              <Table.Cell>{data.banDiameter}</Table.Cell>
                              <Table.Cell>{data.suspensiDepan}</Table.Cell>
                              <Table.Cell>{data.suspensiBelakang}</Table.Cell>
                              <Table.Cell>{data.tipeTransmisi}</Table.Cell>
                              <Table.Cell>{data.tipeGearBox}</Table.Cell>
                              <Table.Cell>{data.dimensiPanjang}</Table.Cell>
                              <Table.Cell>{data.dimanesiLebar}</Table.Cell>
                              <Table.Cell>{data.dimensiTinggi}</Table.Cell>
                              <Table.Cell>{data.dimensiSumbuRoda}</Table.Cell>
                              <Table.Cell>{data.dimensiGroundClearance}</Table.Cell>
                              <Table.Cell>{data.dimensiBerat}</Table.Cell>
                              <Table.Cell>{data.dimensiKargo}</Table.Cell>
                              <Table.Cell>{data.jmlPintu}</Table.Cell>
                              <Table.Cell>{data.jmlKuris}</Table.Cell>
                              <Table.Cell>{data.createdAt}</Table.Cell>
                              <Table.Cell>{data.generalId}</Table.Cell>
                              <Table.Cell textAlign='center'>
                                <Button
                                  className='button-size'
                                  color='red'
                                  attached='left'
                                  onClick={() => this.deleteBrand(data.id)}
                                >
                                  Delete
                                </Button>
                                <Link to={'/editSpec/' + data.id}>
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
