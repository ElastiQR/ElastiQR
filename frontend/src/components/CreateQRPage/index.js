import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CreateQRForm from "./CreateQRForm"

const backgroundShape = require("../../images/shape.svg");

class CreateQRPage extends Component {
  state = {
    learnMoredialog: false,
    getStartedDialog: false
  };
  componentDidMount() {}

  render() {
    return (
        <CreateQRForm></CreateQRForm>
    );
  }
}

export default withRouter(CreateQRPage);