import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../pages";
import { NotFound, Navigation } from "../components";
import { routes } from "../config";
import "./AppRoutes.scss";

export const AppRoutes = () => (
  <div>
    <Navigation />
    <div className="component-container">
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
);
