import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";

import ListItem from "./ListItem";
import MOCK_QR_DATA from "../MOCK_QR_DATA.sql";

const styles = theme => ({

});

class List extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <ListItem name="QR Code Name" description="short description" />
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(List));
