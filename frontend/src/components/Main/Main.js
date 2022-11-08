import React, { Component } from 'react'
import withStyles from '@material-ui/styles/withStyles'
import { withRouter } from 'react-router-dom'
import theme from '../../theme'
import CardContainer from '../shared/CardContainer'
import SimpleChart from './LineChart';
import Typography from '@material-ui/core/Typography'
import '../Profile/ProfileCard.css'

class Main extends Component {
  render() {
    return (
            <CardContainer>
              <h1 style={{color: theme.palette.button.green, textAlign: 'center'}}>Welcome to ElastiQR</h1>
              <div className="social-container home-container">
                  <div className="followers">
                    <Typography variant="h5" id="bold-text">
                      23
                    </Typography>
                    <Typography variant="subtitle1" id="smaller-text">
                      QR Codes
                    </Typography>
                  </div>
                  <div className="likes">
                    <Typography variant="h5" id="bold-text">
                      0
                    </Typography>
                    <Typography variant="subtitle1" id="smaller-text">
                      Broken Links
                    </Typography>
                  </div>
              </div>
              <SimpleChart></SimpleChart>
            </CardContainer>
    )
  }
}

export default withRouter(Main);
