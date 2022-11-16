import React, { Component, useState } from 'react'
import withStyles from '@material-ui/styles/withStyles'
import { Link, withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { ThemeProvider } from '@material-ui/styles'
import { QRCode } from 'react-qrcode-logo'
import { ChromePicker } from 'react-color'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import theme from '../theme'
import TextInput from './TextInput'
import AuthService from "../services/auth.service"
import UserService from '../services/user.service'
import CardContainer from './shared/CardContainer'
import QRStatPage from './QRStatPage'

const styles = theme => ({
  page: {
    backgroundColor: theme.palette.background.lightGray,
    overflow: "hidden"
  },
  flex: {
    display: "flex",
    justifyContent: "center"
  },
  header: {
    backgroundColor: theme.palette.background.green,
    paddingBottom: "1.5rem"
  },
  container: {
    maxWidth: 500,
    width: "80vw",
  },
  qrName: {
    color: theme.palette.text.white,
    fontWeight: "bold",
    backgroundColor: theme.palette.background.green,
    paddingTop: "1rem",
    width: "100%",
    textAlign: "center",
    borderTopLeftRadius: "14px",
    borderTopRightRadius: "14px",
    paddingBottom: "1.5rem"
  },
  button: {
    textTransform: "none",
    width: "100%",
    height: "100%",
    "&:hover": {
      backgroundColor: theme.palette.button.mediumGray,
      color: theme.palette.text.white
    }
  },
  statsPage: {
    margin: "1rem 0"
  },
  link: {
    textDecoration: "none"
  },
  whiteButton: {
    backgroundColor: theme.palette.button.white,
    color: theme.palette.text.green,
    width: "80%",
  },
  greenButton: {
    backgroundColor: theme.palette.button.green,
    color: theme.palette.text.white
  },
  grayButton: {
    backgroundColor: theme.palette.button.darkGray,
    color: theme.palette.text.white
  },
  backButton: {
    margin: "1rem 0"
  },
  linkText: {
    marginTop: "2vh",
  },
  descriptionText: {
    marginBottom: "5vh",
  },
  qrCode: {
    marginBottom: "2vh",
    border: "5rem",
    borderRadius: "14px"
  },
  accordion: {
    width: "80%"
  },
  accordionSummary: {
    "&:hover": {
      backgroundColor: theme.palette.button.mediumGray,
      color: theme.palette.text.white
    },
    color: theme.palette.neutral.main
  },
  accordionDetails: {
    borderTop: `1px solid ${theme.palette.neutral.main}`
  },
  colorSelection: {
    margin: "0.25rem 0 1rem"
  },
  addLogo: {
    margin: "2.5rem 0 1rem"
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
      name: this.props.location.state.name,
      link: this.props.location.state.url,
      description: this.props.location.state.description,
      error: false,
      help: "",
      qrColor: "#000000",
      qrLogo: ""
    }

//    const input = document.getElementById('qrlogo');
//    input.addEventListener('input', this.handleQRLogoChange)
  }


  handleLinkChange = event => {
    this.setState({link: event.target.value})
  }

  handleDescriptionChange = event => {
    this.setState({description: event.target.value})
  }

  handleQRColorChange = color => {
    this.setState({qrColor: color.hex})
  }

  handleQRLogoChange = event => {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = e => {
      this.setState({qrLogo: reader.result})
    }
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

  downloadQRCode = () => {
    var qrCodeURL = document.getElementById('qrcode')
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = this.state.name + ".png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  }


  render() {
    const { classes } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CardContainer>
          <div className={classes.page}>
            <div className={classes.flex}>
              <Grid container spacing={0} className={classes.container}>
                <Grid item xs={12} className={classes.flex}>
                  <Typography variant="h4" className={classes.qrName}>
                    {this.state.name}
                  </Typography>
                </Grid>

                <Grid item xs={12} className={`${classes.flex} ${classes.header}`}>
                  <QRCode
                    size={144}
                    value={this.state.link}
                    viewBox={`0 0 144 144`}
                    fgColor={this.state.qrColor}
                    bgColor={theme.palette.background.lightGray}
                    logoImage={this.state.qrLogo}
                    logoWidth={40}
                    logoHeight={40}
                    className={classes.qrCode}
                    id="qrcode"
                  />
                </Grid>

                <Grid item xs={12} className={`${classes.flex} ${classes.header}`}>
                  <Button variant="contained" onClick={this.downloadQRCode} className={`${classes.button} ${classes.whiteButton}`}>
                    <Typography variant="h6">
                      Download
                    </Typography>
                  </Button>
                </Grid>

                <Grid item xs={12} className={`${classes.flex} ${classes.header}`}>
                  <Accordion className={classes.accordion}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} className={classes.accordionSummary}>
                      <Typography variant="subtitle1">
                        Download Options
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                      <Grid container>
                        <Grid item xs={12} className={classes.flex}>
                          <Typography variant="h6" className={classes.colorSelection}>
                            Select Color
                          </Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.flex}>
                          <ChromePicker 
                            color={this.state.qrColor}
                            onChange={this.handleQRColorChange}
                          />
                        </Grid>
                        <Grid item xs={12} className={classes.flex}>
                          <Typography variant="h6" className={classes.addLogo}>
                            Add Logo
                          </Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.flex}>
                          <Button variant="contained" component="label" className={`${classes.button} ${classes.grayButton}`}>
                            <Typography variant="subtitle1">
                              Upload Image
                            </Typography>
                            <input type="file" accept="image/*" hidden id="qrlogo" onChange={this.handleQRLogoChange} />
                          </Button>
                        </Grid>
                      </Grid> 
                    </AccordionDetails>
                  </Accordion>
                </Grid>

                <Grid item xs={12} className={classes.statsPage}>
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
                      required={false}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.descriptionText}>
                    <TextInput
                      label="Description"
                      value={this.state.description}
                      onChangeValue={this.handleDescriptionChange} 
                      required={false}
                    />  
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
        </CardContainer>
      </ThemeProvider>
    )
  }
}

export default withRouter(withStyles(styles)(QRDetailsPage));
