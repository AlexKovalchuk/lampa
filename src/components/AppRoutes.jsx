import React, {Suspense, lazy, Fragment} from "react";
import {Switch, Route} from "react-router-dom";
import {routes} from "../config";
import "./AppRoutes.scss";
import {Navigation} from "../components";
const Goods = lazy(() => import('../pages/Goods/Goods'));
const Cart = lazy(() => import('../pages/Cart/Cart'));
const {NotFound} = lazy(() => import('../components/NotFound'));

export const AppRoutes = () => {
  return (
    <Fragment>
      <Navigation/>
      <div className="component-container">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path={routes.goods} component={Goods}/>
            <Route path={routes.cart} component={Cart}/>
            <Route component={NotFound}/>
          </Switch>
        </Suspense>
      </div>
    </Fragment>
  );
}
