import React, { Component } from "react";


import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default class postBrand extends Component{

    componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                carBrand: 'test', 
                logoUrl : 'asdasd'
         })
        };
        fetch('http://localhost:4000/api/brand/', requestOptions)
            .then(async response => {
                const data = await response.json();
                console.log(data)
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
    
                this.setState({ postId: data.id })
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }

        


        
        render(){
            return(
                <div>
               
                
            </div>
                
            )
        
        


        }
    }