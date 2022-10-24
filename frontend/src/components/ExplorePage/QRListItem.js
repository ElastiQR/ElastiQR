import React, { Component } from 'react'
import withStyles from '@material-ui/styles/withStyles'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { ThemeProvider } from '@material-ui/styles'
import ButtonBase from '@material-ui/core/ButtonBase'

import theme from '../../theme'

const styles = theme => ({
  link: {
    textDecoration: "none",
  },
  buttonBase: {
    width: "100%",
    marginBottom: "1rem",
  },
  card: {
    width: "100%",
    textAlign: "left",
    "&:hover": {
      boxShadow: `4px 4px 4px ${theme.palette.button.mediumGray}`,
      backgroundColor: theme.palette.button.lightGray
    }
  },
  cardTitle: {
    color: theme.palette.text.black,
    marginBottom: 5
  },
  cardDescription: {
    color: theme.palette.text.gray
  }
});

class QRListItem extends Component {
  render() {
    const { classes } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Link className={classes.link}
          to={{
            pathname: "/qr-details-testing",
            state: {
              name: this.props.name,
              description: this.props.description
            }
          }}
        >
          <ButtonBase className={classes.buttonBase}>
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
          </ButtonBase>
        </Link>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(QRListItem);
