import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";

import NavBar from "./Navbar";

const styles = theme => ({
  
});

class CreatePage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment >
        <NavBar />
        <h1> Create QR Code Page</h1>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(CreatePage));