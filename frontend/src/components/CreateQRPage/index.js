import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CreateQRForm from "./CreateQRForm"

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