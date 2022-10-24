import React, { Component } from 'react'
import withStyles from '@material-ui/styles/withStyles'
import { withRouter } from 'react-router-dom'
import List from '@material-ui/core/List'
import MOCK_DATA from '../../MOCK_DATA.json'

import QRListItem from "./QRListItem"
import AuthService from "../../services/auth.service"

class QRList extends Component {
/*
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      QRCodes: []
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser()  
    
    fetch('http://localhost:3000/auth/getQRCodes?' + new URLSearchParams({
          userID: user.userID
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
    if (QRCodes.length == 0) {
      return <div> You don't have any QR codes.
        Try creating your first one with the button above! </div>
    } else if (error) {
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
*/

  render() {
    return (
      <List>
        {MOCK_DATA.map((item, index) => (
          <QRListItem name={item.name} description={item.description} />
        ))}
      </List>
    );
  }
}

export default withRouter(QRList);
