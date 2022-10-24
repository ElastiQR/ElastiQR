import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Login from './components/Login'
import Main from './components/Main/Main'
import Signup from './components/Signup'
import ExplorePage from './components/ExplorePage/ExplorePage'
import ScrollToTop from './components/ScrollTop'
import Profile from './components/Profile'
import CreateQRPage from './components/CreateQRPage'

/* For testing purposes */
import QRDetailsPage from './components/QRDetailsPage'

export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Main } />
          <Route exact path='/login' component={ Login } />
          <Route exact path='/signup' component={ Signup } />
          <Route exact path='/my-qrs' component={ ExplorePage } />
          <Route exact path='/qr-details-testing' component={ QRDetailsPage } />
          <Route exact path='/create-qr' component={ CreateQRPage } />
          <Route exact path='/profile' component={ Profile } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )