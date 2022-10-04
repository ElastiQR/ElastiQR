import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Login from './components/Login'
import Main from './components/Main'
import Signup from './components/Signup'
import ScrollToTop from './components/ScrollTop'

export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Main } />
          <Route exact path='/login' component={ Login } />
          <Route exact path='/signup' component={ Signup } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )