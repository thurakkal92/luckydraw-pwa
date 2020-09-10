import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Routes from './config'

function PageRouter() {
  return (
    <Router>
      <Switch>
        {Routes.map((route, i) => (
          <Route {...route} key={i} />
        ))}
      </Switch>
    </Router>
  )
}

export default PageRouter