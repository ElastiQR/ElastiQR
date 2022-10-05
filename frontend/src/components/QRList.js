import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import List from "@material-ui/core/List";

import QRListItem from "./QRListItem";
import MOCK_DATA from "../MOCK_DATA.json";

class QRList extends Component {
  render() {
    return (
      <List>
        {MOCK_DATA.map((item, index) => (
          <QRListItem name={item.name} description={item.description} />
        ))}
      </List>
    );
  }
}

export default withRouter(QRList);
