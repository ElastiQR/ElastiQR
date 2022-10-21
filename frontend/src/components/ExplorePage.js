import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from '@material-ui/styles';

import theme from "../theme";
import NavBar from "./Navbar";
import QRList from "./QRList";

const styles = theme => ({
  page: {
    backgroundColor: theme.palette.background.lightGray,
    width: "100vw",
    minHeight: "100vh",
    overflow: "hidden"
  },
  container: {
    maxWidth: 500,
    width: "80vw",
    marginTop: "4vh"
  },
  flex: {
    display: "flex",
    justifyContent: "center"
  },
  link: {
    textDecoration: "none"
  },
  button: {
    backgroundColor: theme.palette.button.green,
    color: theme.palette.text.white,
    textTransform: "none",
    width: "100%",
    height: "100%",
    "&:hover": {
      backgroundColor: theme.palette.button.mediumGrey
    }
  },
  buttonContainer: {
    marginBottom: "3vh"
  },
  listTitle: {
    color: theme.palette.text.green,
    fontWeight: "bold"
  }
});

class ExplorePage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.page}>
        <NavBar/>
        <ThemeProvider theme={theme}>
          <div className={classes.flex}>
            <Grid container spacing={3} className={classes.container}>
              <Grid item xs={12} className={classes.flex, classes.buttonContainer}>
                <Link to="/create-qr" className={classes.link}>
                  <Button variant="contained" className={classes.button}>
                    <Typography variant="h6">
                      Create New QR Code
                    </Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} className={classes.flex}>
                <Typography variant="h5" className={classes.listTitle}>
                  Your QR Codes
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.flex}>
                <QRList />
              </Grid>
            </Grid>
          </div>
        </ThemeProvider>
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(ExplorePage));
