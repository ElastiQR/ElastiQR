import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import List from "@material-ui/core/List";

import QRListItem from "./QRListItem";
import MOCK_DATA from "../MOCK_DATA.json";

class QRList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      QRCodes: []
    };
  }

  componentDidMount() {
      fetch('http://localhost:3000/auth/getQRCodes?' + new URLSearchParams({
          // Currently using a test user id
          // Needs user context from login to access current user id
          userID: 5
      }), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            QRCodes: result.codes
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, QRCodes } = this.state;
    if (error) {
      return <div> Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      console.log(QRCodes);
      return (
        <List>
          {QRCodes.map((item, index) => (
            <QRListItem name={item.qrname} description={item.description} />
          ))}
        </List>
      );
    }
  }
}

export default withRouter(QRList);
