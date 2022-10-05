import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";

import NavBar from "./Navbar";
import List from "./List";

const styles = theme => ({

});

class MyQRsPage extends Component {
  render() {
    const { classes } = this. props;

    return (
      <React.Fragment>
        <NavBar/>
        <List />
      </React.Fragment>
    )
  }
}

export default withRouter(withStyles(styles)(List));
