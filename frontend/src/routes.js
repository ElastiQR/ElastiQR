import React from 'react'
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Main from './components/Main/Main'
import Signup from './components/Signup'
import ExplorePage from './components/ExplorePage/ExplorePage'
import ScrollToTop from './components/ScrollTop'
import Profile from './components/Profile'
import CreateQRPage from './components/CreateQRPage'
import OAuth from './components/OAuth'
import AuthService from './services/auth.service'

import { ThemeProvider } from '@material-ui/styles'
import Navbar from './components/Navbar/Navbar'
import theme from './theme'

/* For testing purposes */
import QRDetailsPage from './components/QRDetailsPage'
import AnimatedBackground from './components/shared/AnimatedBackground/AnimatedBackground'

export default props => (
    <HashRouter>
      <ScrollToTop>
      <ThemeProvider theme={theme}>
        <Navbar/>
        <AnimatedBackground></AnimatedBackground>
        <div style={theme.page}>
          <div style={theme.flex}>
            <Switch>
              <Route exact path='/' render={
                  () => (AuthService.getCurrentUser()) ? <Main /> : <Redirect to="/login" />
                } />
              <Route exact path='/login' component={ Login } />
              <Route exact path='/signup' component={ Signup } />
              <Route exact path='/my-qrs' component={ ExplorePage } />
              <Route exact path='/qr-details-testing' component={ QRDetailsPage } />
              <Route exact path='/create-qr' component={ CreateQRPage } />
              <Route exact path='/profile' component={ Profile } />
              <Route exact path='/oauth' component={ OAuth }/>
            </Switch>
          </div>
        </div>
        </ThemeProvider>
      </ScrollToTop>
    </HashRouter>
  )