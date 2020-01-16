import React from "react";
import { Switch, Route } from "react-router-dom";
import { Goods, Cart } from "../pages";
import { NotFound, Navigation } from "../components";
import { routes } from "../config";
import "./AppRoutes.scss";

export const AppRoutes = () => (
  <div>
    <Navigation />
    <div className="component-container">
      <Switch>
        <Route exact path={routes.goods} component={Goods} />
        <Route exact path={routes.cart} component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
);
