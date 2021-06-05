import React, { Fragment } from 'react';

import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import ProductDetail from "./components/Product-Detail/ProductDetail";
import  { BrowserRouter as Router, Switch, Route, Link }  from "react-router-dom";

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route path="/products">
                  <Products/>
              </Route>
              <Route path="/product-detail">
                  <ProductDetail/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
