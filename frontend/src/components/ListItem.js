import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    margin: 10,
    maxWidth: 500
  },
  cardTitle: {
    color: "#000000",
    marginBottom: 5
  },
  cardDescription: {
    color: "#888888"
  }
});

class ListItem extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6" className={classes.cardTitle}>
              {this.props.name}
            </Typography>
            <Typography variant="body2" className={classes.cardDescription}>
              {this.props.description}
            </Typography>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(ListItem));
