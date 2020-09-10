import React from "react";

import "./App.css";
import Homepage from "./pages/homepage/homepage";
import "./pages/homepage/homepage.scss";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
