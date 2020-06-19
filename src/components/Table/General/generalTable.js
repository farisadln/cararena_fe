import React, { Component } from "react";


import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default class generalTable extends Component{
    constructor(props){
        super(props)
        this.state = {
            content: [],
          };
    }
    
    

    componentDidMount() {
        
        const API_URL = fetch('http://localhost:4000/api/general');

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
                        <td>{data.type}</td>
                        <td>{data.hargaOtr}</td>
                        <td>{data.createdAt}</td>
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