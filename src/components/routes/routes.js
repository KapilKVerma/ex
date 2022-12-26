import React from "react";
import { Route } from "react-router-dom";

import Dashboard from "../dashboard/Dashboard";
import Machines from "../machines/machines";
import Employees from "../employes/Employs";

const Routes = () => {
  const AppRoutes = [
    { path: "/dashboard", component: Dashboard },
    { path: "/machines", component: Machines },
    { path: "/employess", component: Employees },
  ];
  return (
    <div>
      {AppRoutes.map((route, index) => {
        return (
          <span key={index}>
            <Route path={route.path} exact component={route.component} />
          </span>
        );
      })}
    </div>
  );
};

export default Routes;
