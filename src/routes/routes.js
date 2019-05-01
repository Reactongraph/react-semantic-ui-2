import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ALLROUTES } from './metaRoutes';

const history = require("history").createBrowserHistory;

const ProjectRouter = () => (
    <Switch>
      {ALLROUTES.map((route, i) => (
        <Route
          path={route.path}
          component={route.component}
          exact={route.exact}
          key={i}
        />
      ))}
    </Switch>
)

export default ProjectRouter;
