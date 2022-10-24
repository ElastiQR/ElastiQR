import React, { Component, useState } from 'react'
import withStyles from '@material-ui/styles/withStyles'
import { Link, withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { ThemeProvider } from '@material-ui/styles'
import QRCode from 'react-qr-code'

import theme from '../theme'
import NavBar from './Navbar'
import TextInput from './TextInput'

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
      link: "https://github.com/ElastiQR/ElastiQR",
      description: this.props.location.state.description
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
    console.log("Link: " + this.state.link);
    console.log("Descriptoin: " + this.state.description);
  }

  render() {
    const { classes } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <div className={classes.page}>
        <NavBar />
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
                  value="https://github.com/ElastiQR/ElastiQR"
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

              <Grid container item spacing={1}>
                <Grid item xs={12} className={classes.linkText}>
                  <TextInput label="Link" value={this.state.link} onChangeValue={this.handleLinkChange} />
                </Grid>
                <Grid item xs={12} className={classes.descriptionText}>
                  <TextInput label="Description" value={this.state.description} onChangeValue={this.handleDescriptionChange} />
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
