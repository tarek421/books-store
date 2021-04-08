import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PrivetRoute from './Component/PrivetRoute/PrivetRoute';
import Login from './Component/Login/Login';
import NoMatch from './Component/NoMatch/NoMatch';
import { createContext, useState } from 'react';
import Header from './Component/Header/Header';
// import Order from './Component/Order/Order';
import Admin from './Component/Admin/Admin';
import CheckOut from './Component/CheckOut/CheckOut';
import Order from './Component/Order/Order';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <>
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Header />
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <PrivetRoute path="/admin">
                <Admin />
              </PrivetRoute>
              <PrivetRoute path="/book/:_id">
                <CheckOut />
              </PrivetRoute>
              <Route path="/order/:_id">
                <Order />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </Router>
      </userContext.Provider>
    </>
  );
}

export default App;
