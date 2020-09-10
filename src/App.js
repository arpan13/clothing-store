import React from "react";

import "./App.css";
import Homepage from "./pages/homepage/homepage";
import "./pages/homepage/homepage.scss";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
