import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles'
import './App.css';
import Routes from './routes'
import { green } from '@material-ui/core/colors'

const theme = createTheme({
  palette: {
    secondary: {
      main: green[50]
    },
    primary: {
      main: green[400]
    }
  },
  typography: {
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});


class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;