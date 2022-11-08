import React, { Component } from 'react'
import withStyles from '@material-ui/styles/withStyles'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { ThemeProvider } from '@material-ui/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import theme from '../../theme'

class QRListItem extends Component {
  render() {
    return (
        <Link style={theme.link}
          to={{
            pathname: "/qr-details-testing",
            state: {
              id: this.props.id,
              name: this.props.name,
              description: this.props.description,
              url: this.props.url
            }
          }}
        >
          <ButtonBase style={theme.buttonBase}>
          <Card style={theme.card}>
            <CardContent>
              <Typography variant="h6" style={theme.cardTitle}>
                {this.props.name}
              </Typography>
              <Typography variant="body2" style={theme.cardDescription}>
                {this.props.description}
              </Typography>
            </CardContent>
          </Card>
          </ButtonBase>
        </Link>
    );
  }
}

export default QRListItem;
