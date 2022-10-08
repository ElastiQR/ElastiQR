import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import NavBar from "./Navbar";
import QRList from "./QRList";

const styles = theme => ({
  page: {
    backgroundColor: "#F5F4F4",
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
    backgroundColor: "#62D2A2",
    color: "#ffffff",
    textTransform: "none",
    width: "100%",
    height: "100%",
    "&:hover": {
      backgroundColor: "#888888"
    }
  },
  buttonContainer: {
    marginBottom: "3vh"
  },
  listTitle: {
    color: "#62D2A2",
    fontWeight: "bold"
  }
});

class ExplorePage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.page}>
        <NavBar/>
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
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(ExplorePage));
