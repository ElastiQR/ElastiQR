import React, { Component, useState } from 'react'
import withStyles from '@material-ui/styles/withStyles'
import { Link, withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { ThemeProvider } from '@material-ui/styles'
import QRCode from 'react-qr-code'

import theme from '../theme'
import TextInput from './TextInput'
import AuthService from "../services/auth.service"
import UserService from '../services/user.service'
import QRStatPage from './QRStatPage'

const styles = theme => ({
  page: {
    backgroundColor: theme.palette.background.lightGray,
    width: "100vw",
    minHeight: "100vh",
    overflow: "hidden"
  },
  flex: {
    display: "flex",
    justifyContent: "center"
  },
  container: {
    maxWidth: 500,
    width: "80vw",
    marginTop: "4vh"
  },
  qrName: {
    color: theme.palette.text.green,
    fontWeight: "bold"
  },
  button: {
    color: theme.palette.text.white,
    textTransform: "none",
    width: "100%",
    height: "100%",
    "&:hover": {
      backgroundColor: theme.palette.button.mediumGray
    }
  },
  link: {
    textDecoration: "none"
  },
  greenButton: {
    backgroundColor: theme.palette.button.green
  },
  grayButton: {
    backgroundColor: theme.palette.button.darkGray
  },
  backButton: {
    marginBottom: "4vh"
  },
  linkText: {
    marginTop: "2vh",
  },
  descriptionText: {
    marginBottom: "5vh",
  },
  qrCode: {
    marginBottom: "2vh"
  }
})


class QRDetailsPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    
    /* The link is just a placeholder for now to make sure that the qr code works.
       Also, right now I am reading in the qr code name and description from the
       QRListItem component. I just needed something to test with until we can
       connect with the backend. */
    this.state = {
      link: this.props.location.state.url,
      description: this.props.location.state.description,
      error: false,
      help: ""
    }
  }

  handleLinkChange = event => {
    this.setState({link: event.target.value})
  }

  handleDescriptionChange = event => {
    this.setState({description: event.target.value})
  }

  /* Currently, I am using the update function just to make sure that the link
     and description have the correct value after being changed */
  update = () => {
    const regex = new RegExp(
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/);
    if (!regex.test(this.state.link)) {
      this.setState({error: true, help: "Invalid URL"});
      return;
    }

    UserService.updateQR(this.props.location.state.id, 
      this.props.location.state.name, 
      this.state.link, 
      this.state.description)
    .then(
      () => {
        // might want to add some logic here in the future to indicate success
      },
      (error) => {
        if (error.response?.data?.message === 'Token error') {
          AuthService.logout();
          setTimeout(() => { this.props.history.push('/login') }, 500);
        } else {
          const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
          console.log(resMessage);
          console.log(error);
        }
      }
    )
  }

  render() {
    const { classes } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <div className={classes.page}>
          <div className={classes.flex}>
            <Grid container spacing={3} className={classes.container}>
              <Grid item xs={12} className={classes.flex}>
                <Typography variant="h5" className={classes.qrName}>
                  {this.props.location.state.name}
                </Typography>
              </Grid>

              <Grid item xs={12} className={classes.flex}>
                <QRCode
                  size={144}
                  value={this.state.link}
                  viewBox={`0 0 144 144`}
                  bgColor={theme.palette.background.lightGray}
                  className={classes.qrCode}
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" className={`${classes.button} ${classes.greenButton}`}>
                  <Typography variant="h6">
                    Download
                  </Typography>
                </Button>
              </Grid>

              <Grid item xs={12}>
                <QRStatPage id={this.props.location.state.id}></QRStatPage>
              </Grid>

              <Grid container item spacing={1}>
                <Grid item xs={12} className={classes.linkText}>
                  <TextInput 
                    label="Link"
                    value={this.state.link}
                    onChangeValue={this.handleLinkChange} 
                    error={this.state.error}
                    helperText={this.state.help}
                  />
                </Grid>
                <Grid item xs={12} className={classes.descriptionText}>
                  <TextInput
                    label="Description"
                    value={this.state.description}
                    onChangeValue={this.handleDescriptionChange} />
                </Grid>             
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" onClick={this.update} className={`${classes.button} ${classes.greenButton}`}>
                  <Typography variant="h6">
                    Update
                  </Typography>
                </Button>
              </Grid>

              <Grid item xs={12} className={classes.backButton}>
                <Link to="/my-qrs" className={classes.link}>
                  <Button variant="contained" className={`${classes.button} ${classes.grayButton}`}>
                    <Typography variant="h6">
                      Back
                    </Typography>
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </ThemeProvider>
    )
  }
}

export default withRouter(withStyles(styles)(QRDetailsPage));
