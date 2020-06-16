import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import '../board/Dashboard.css'

const Side = props => {


    return (
    

            <Nav className="col-md-2 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Cars</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Users</Nav.Link>
            </Nav.Item>
           
            </Nav>

        

        );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar