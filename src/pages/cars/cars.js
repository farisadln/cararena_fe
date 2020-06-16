import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default class cars extends Component{
    constructor(props) {
        super(props)
        this.state = {
            content: [],
          };
    }
    // state = {
    //     content: [],
    //   };
    

    componentDidMount() {
        
        const API_URL = fetch('http://139.162.28.184:4000/api/brand/cars');

        API_URL.then(res => {
            if(res.status === 200)
                return res.json()
        }).then( resJson => {
            this.setState({
                content : resJson
                
            })
            console.log(this.state.content.length)
            
        })

        


        }
        render(){
            return(
                <div>
                
                {this.state.content.length > 0 ? (
                    this.state.content.map(data => (
                      <tr key={data.id}>
                        <td>{data.car_brand}</td>
                        <td>{data.id_brand}</td>
                        <td>{data.logo_url}</td>
                        <td>{data.type}</td>
                        <td>{data.harga_otr}</td>
                        <td>{data.createAt}</td>
                        <td>{data.kapasistasMesin}</td>
                        <td>{data.jmlSilinder}</td>
                        <td>{data.jmlKatup}</td>
                        <td>{data.maxTenaga}</td>
                        <td>{data.jenisBahanBakar}</td>
                        <td>{data.kapasitasBahanBakar}</td>
                        <td>{data.suspensiDepan}</td>
                        <td>{data.banAspekRasio}</td>
                        <td>{data.suspensiBelakang}</td>
                        <td>{data.tipeTransmisi}</td>
                        <td>{data.tipeGearBox}</td>
                        <td>{data.dimensiPanjang}</td>
                        <td>{data.dimensiSumbuRoda}</td>
                        <td>{data.dimensiGroundClearance}</td>
                        <td>{data.dimensiBerat}</td>
                        <td>{data.dimensiKargo}</td>
                        <td>{data.jmlPintu}</td>
                        <td>{data.img1}</td>
                        <td>{data.img2}</td>
                        <td>{data.img3}</td>

                        <td>
                          <button className="button muted-button">Edit</button>
                          <button className="button muted-button">Delete</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3}>No users</td>
                    </tr>
                  )}
             
                
                </div>
            )
        }
        


}