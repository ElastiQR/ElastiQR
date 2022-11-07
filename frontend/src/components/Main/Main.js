import React, { Component } from 'react'
import withStyles from '@material-ui/styles/withStyles'
import { withRouter } from 'react-router-dom'
import theme from '../../theme'
import CardContainer from '../shared/CardContainer'
import SimpleChart from './LineChart';

class Main extends Component {
  render() {
    return (
            <CardContainer>
              <h1 style={{color: theme.palette.button.green, textAlign: 'center'}}>Welcome to ElastiQR</h1>
              <div className="social-container">
                  <div className="followers">
                      <h1 className="bold-text">23</h1>
                      <h2 className="smaller-text">QR Codes</h2>
                  </div>
                  <div className="likes">
                      <h1 className="bold-text">0</h1>
                      <h2 className="smaller-text">Broken Links</h2>
                  </div>
              </div>
              <SimpleChart></SimpleChart>
            </CardContainer>
    )
  }
}

export default withRouter(Main);
