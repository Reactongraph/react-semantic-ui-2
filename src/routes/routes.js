import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { ALLROUTES } from './metaRoutes';

const ProjectRouter = () => (
    <Routes>
      {ALLROUTES.map((route, i) => (
        <Route
          path={route.path}
          component={route.component}
          exact={route.exact}
          key={i}
        />
      ))}
    </Routes>
)

export default ProjectRouter;
