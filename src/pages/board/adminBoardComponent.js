import React, { Component } from "react";

import userService from "../../services/userService";

import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

import Dasboard from "../cars/cars"

export default class adminBoardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    userService.getAdminBoard().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  render() {
    return (
      <Dasboard/>
    );
  }
}
