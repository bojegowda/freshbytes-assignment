import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AddPlants from "./screens/AddPlants";
import PlantsList from "./screens/PlantsList";
import { signout } from "./actions/userActions";

function App() {
  const userSignIn = useSelector((state) => state.userSignin);
  const { isLoggedIn, loggedInUser } = userSignIn;

  return (
    <React.StrictMode>
      <Router>
        {isLoggedIn ? (
          <header className="row">
            <div>
              <Link to="">
                <h1>{loggedInUser.name}</h1>
              </Link>
            </div>
            <div>
              <Link to="/signout">Sign Out</Link>
            </div>
          </header>
        ) : null}
        <Switch>
          <Route exact path="/" component={SigninScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/addPlants" component={AddPlants} />
          <Route path="/plants" component={PlantsList} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
