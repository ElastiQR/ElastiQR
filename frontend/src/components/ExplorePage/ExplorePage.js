import React, { Component } from 'react'
import withStyles from '@material-ui/styles/withStyles'
import { Link, withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import theme from '../../theme'
import QRList from './QRList'
import CardContainer from '../shared/CardContainer'


class ExplorePage extends Component {
  render() {

    return (
          <CardContainer>
            <Grid container spacing={3} style={theme.container}>
              <Grid item xs={12} style={theme.buttonContainer}>
                <Link to="/create-qr" style={theme.link}>
                  <Button variant="contained" style={theme.button}>
                    <Typography variant="h6">
                      Create New QR Code
                    </Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} style={theme.flex}>
                <Typography variant="h5" style={theme.listTitle}>
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

export default withRouter(ExplorePage);
