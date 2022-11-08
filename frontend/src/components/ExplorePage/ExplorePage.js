import React, { Component } from 'react'
import withStyles from '@material-ui/styles/withStyles'
import { Link, withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import theme from '../../theme'
import QRList from './QRList'
import CardContainer from '../shared/CardContainer'
import { mergeClasses } from '@material-ui/styles'

const styles = theme => ({
  button: {
    backgroundColor: "#62D2A2",
    color: "#FFFFFF",
    textTransform: "none",
    width: "100%",
    height: "100%",
    "&:hover": {
      backgroundColor: "#AAAAAA"
    }
  }
})

class ExplorePage extends Component {
  render() {
    const { classes } = this.props;

    return (
          <CardContainer>
            <Grid container spacing={0} style={theme.container}>
              <Grid item xs={12} style={theme.buttonContainer}>
                <Link to="/create-qr" style={theme.link}>
                  <Button variant="contained" className={classes.button}>
                    <Typography variant="h6">
                      Create New QR Code
                    </Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} style={theme.flex}>
                <Typography variant="h4" style={theme.listTitle}>
                  Your QR Codes
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <QRList />
              </Grid>
            </Grid>
          </CardContainer>
    )
  }
}

export default withRouter(withStyles(styles)(ExplorePage));
