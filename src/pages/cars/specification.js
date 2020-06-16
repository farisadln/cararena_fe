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
                
                </div>
            )
        }


}