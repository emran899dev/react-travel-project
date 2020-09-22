import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import Destination from './component/Destination/Destination';
import NotFound from './component/NotFound/NotFound';
import Register from './component/Register/Register';
import GmailAndFbSignin from './component/Login/GmailAndFbSignin';
import Home from './component/Home/Home';
import { createContext } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [city, setCity] = useState();
  return (
    <div style={{ marginTop: '50px' }}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
      <Router>
        <Switch>
          <Route exact path="/login">
            <Header></Header>
            <Login></Login>
            <GmailAndFbSignin></GmailAndFbSignin>
          </Route>
          <Route path="/register">
            <Header></Header>
            <Register></Register>
            <GmailAndFbSignin></GmailAndFbSignin>
          </Route>
          <PrivateRoute exact path="/destination">
            <Header></Header>
            <Destination city={city}></Destination>
          </PrivateRoute>
          <Route exact path="/">
            <Header></Header>
            <Home setCity={setCity}></Home>
          </Route>
          <Route exact path="*">
            <Header></Header>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      <p style={{marginTop: '10px'}}>Name: {loggedInUser.name}</p>
      </UserContext.Provider>
    </div>
  );
}

export default App;
