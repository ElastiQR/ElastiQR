import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ProfileCard from "./ProfileCard"

class Signup extends Component {
  state = {
    learnMoredialog: false,
    getStartedDialog: false
  };

  componentDidMount() {}

  render() {
    return (
        <Grid container justify="center">
          <ProfileCard></ProfileCard>
        </Grid>
    );
  }
}

export default withRouter(Signup);