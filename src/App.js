import React from 'react';
import { Router } from "react-router-dom";
import { AppRoutes } from "./components";
import { history } from "./core/routing/history";
import './App.css';

function App() {
  return (
    <Router history={history}>
      <AppRoutes />
    </Router>
  );
}

export default App;
