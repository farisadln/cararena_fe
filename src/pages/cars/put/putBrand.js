import React, { Component } from "react";


import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default class putBrand extends Component{

    componentDidMount() {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                carBrand: 'yamantul', 
                logoUrl : 'https://d2pa5gi5n2e1an.cloudfront.net/webp/id/images/maker/cars/S_audi.png'
         })
           
        };
        let id = 6;
        let url = (`http://localhost:4000/api/brand/${id}`)
        console.log(url)
        fetch(url,requestOptions)
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