import React from "react";
import { Route, Redirect } from "react-router-dom";
import Hoc from "./hoc/hoc";

import LandingPage from "./containers/LandingPage";
import Signup from "./components/Signup";
// import TeamPage from "./containers/TeamPage";
// import ProductPage from "./containers/ProductPage";
// import PurchasePage from "./containers/PurchasePage";

const UnauthRouter = () => (
  <Hoc>
    {/* <Route exact path="/team/" component={TeamPage} />
    <Route exact path="/product/" component={ProductPage} />
    <Route exact path="/purchase/" component={PurchasePage} /> */}
    <Route exact path="/register/" component={Signup} />
    <Route exact path="/" component={LandingPage} />
  </Hoc>
);

export default UnauthRouter;
