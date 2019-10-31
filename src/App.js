import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";

import "./scss/global.scss";

function App() {
  return (
    <Router>
      <div className='App'>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/shop'>Shop</Link>
        </nav>
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
