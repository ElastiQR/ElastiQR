import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Login from './components/Login'
import Main from './components/Main'
import Signup from './components/Signup'
import ExplorePage from './components/ExplorePage/ExplorePage'
import CreatePage from './components/CreatePage'
import ScrollToTop from './components/ScrollTop'

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
          <Route exact path='/create-qr' component={ CreatePage } />
          <Route exact path='/qr-details-testing' component={ QRDetailsPage } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )