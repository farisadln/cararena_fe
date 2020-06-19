import React, { Component } from "react";


import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default class specification extends Component{
    state = {
        content: [],
      };
    

    componentDidMount() {
        
        const API_URL = fetch('http://139.162.28.184:4000/api/specification/');

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
                <div>
                 { this.state.content.length > 0 ? (
                    this.state.content.map(data => (
                        <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.kapasistasMesin}</td>
                        <td>{data.jmlSilinder}</td>
                        <td>{data.jmlKatup}</td>
                        <td>{data.drivetrain}</td>
                        <td>{data.maxTenaga}</td>
                        <td>{data.maxTorsi}</td>
                        <td>{data.jenisBahanBakar}</td>
                        <td>{data.kapasitasBahanBakar}</td>
                        <td>{data.banLebar}</td>
                        <td>{data.banAspekRasio}</td>
                        <td>{data.banDiameter}</td>
                        <td>{data.suspensiDepan}</td>
                        <td>{data.suspensiBelakang}</td>
                        <td>{data.tipeTransmisi}</td>
                        <td>{data.tipeGearBox}</td>
                        <td>{data.dimensiPanjang}</td>
                        <td>{data.dimanesiLebar}</td>
                        <td>{data.dimensiTinggi}</td>
                        <td>{data.dimensiSumbuRoda}</td>
                        <td>{data.dimensiGroundClearance}</td>
                        <td>{data.dimensiBerat}</td>
                        <td>{data.dimensiKargo}</td>
                        <td>{data.jmlPintu}</td>
                        <td>{data.jmlKuris}</td>
                        <td>{data.createdAt}</td>
                        <td>{data.generalId}</td>
                        </tr> 
                    ))
                ):(
                    <tr>
                      <td colSpan={3}>No users</td>
                    </tr>
                )
            }
                </div>
            )
        }


}