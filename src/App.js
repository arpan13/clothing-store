import React, { useEffect, useState } from "react";

import "./App.css";
import Homepage from "./pages/homepage/homepage";
import "./pages/homepage/homepage.scss";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth } from "./firebase/firebase-utils";

const App = () => {
  const [curruser, setCurruser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurruser(user);
      console.log(user);
    });
  }, []);

  let unsubscribeFromAuth = null;

  return (
    <div>
      <Header curruser={curruser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
};

export default App;
