import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";

import "./scss/global.scss";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop'>
            <Shop />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
