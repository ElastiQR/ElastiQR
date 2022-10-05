import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Main from './components/Main'
import ExplorePage from './components/ExplorePage'
import ScrollToTop from './components/ScrollTop'

export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Main } />
          <Route exact path='/my-qrs' component={ ExplorePage } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )