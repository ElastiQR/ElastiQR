import React, { Component } from 'react'
import withStyles from '@material-ui/styles/withStyles'
import { withRouter } from 'react-router-dom'
import List from '@material-ui/core/List'

import QRListItem from "./QRListItem"
import AuthService from "../../services/auth.service"

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
    const user = AuthService.getCurrentUser()
    if (!user) {
      this.setState({ error: 
        {message: "User needs to login. In the future, we'll want to hide this page until logged in"} 
      });
      return;
    }

    fetch('http://localhost:3000/qr/getQRCodes?' + new URLSearchParams({
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
    if (error) {
      console.log(error.message)
      return <div> Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else if (QRCodes.length == 0) {
      return <div> You don't have any QR codes.
      Try creating your first one with the button above! </div>
    } else {
      return (
        <List>
          {QRCodes.map((item, index) => (
            <QRListItem id={item.qrID} 
              name={item.qrname} 
              description={item.description} 
              url={item.qrURL} />
          ))}
        </List>
      );
    }
  }
}

export default withRouter(QRList);
