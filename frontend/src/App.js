import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Routes from './routes'
import { theme } from './theme';

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