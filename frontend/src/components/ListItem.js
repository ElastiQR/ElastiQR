import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import { Link, withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  link: {
    textDecoration: "none",
  },
  card: {
    width: "100%",
    marginBottom: "1rem",
    "&:hover": {
      boxShadow: "4px 4px 4px #888888",
      backgroundColor: "#F9F9F9"
    }
  },
  cardTitle: {
    color: "#000000",
    marginBottom: 5
  },
  cardDescription: {
    color: "#888888"
  }
});

class QRListItem extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Link className={classes.link}>
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
      </Link>
    );
  }
}

export default withRouter(withStyles(styles)(QRListItem));
