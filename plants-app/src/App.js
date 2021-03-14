import React from "react";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AddPlants from "./screens/AddPlants";
import { signout } from "./actions/userActions";

function App() {
  return (
    <React.StrictMode>
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={SigninScreen} />
          <Route path="/signin" component={SigninScreen} />

          <Route path="/register" component={RegisterScreen} />
          <Route path="/addPlants" component={AddPlants} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
