import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Login from './components/Login'
import Main from './components/Main'
import ScrollToTop from './components/ScrollTop'

export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Main } />
          <Route exact path='/login' component={ Login } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )