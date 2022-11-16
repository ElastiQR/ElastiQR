import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import List from '@material-ui/core/List'
import { LinearProgress } from '@material-ui/core'

import QRListItem from "./QRListItem"
import AuthService from "../../services/auth.service"
import UserService from '../../services/user.service'

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

    UserService.getUserQRs(user.userID)
    .then(
      (response) => {
        this.setState({
          isLoaded: true,
          QRCodes: response.data.codes
        });
      },
      (error) => {
        if (error.response?.data?.message === 'Token error') {
          AuthService.logout();
          setTimeout(() => { this.props.history.push('/login') }, 500)
        } else {
          this.setState({
            isLoaded: true
          });
          if (error.response?.status !== 400) {
            this.setState({
              error
            });
          }
        }
      }
    )
  }

  render() {
    const { error, isLoaded, QRCodes } = this.state;
    if (error) {
      console.log(error.message)
      return <div> Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <LinearProgress/>
    } else if (QRCodes.length === 0) {
      return <div> You don't have any QR codes.
      Try creating your first one with the button above! </div>
    } else {
      return (
        <List>
          {QRCodes.map((item, index) => (
            <QRListItem key={item.qrID} 
              id={item.qrID} 
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
