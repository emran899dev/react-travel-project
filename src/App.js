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


function App() {
  const [city, setCity] = useState();
  return (
    <div style={{marginTop: '50px'}}>
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
        <Route exact path="/destination">
        <Header></Header>
            <Destination city={city}></Destination>
          </Route>
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
    </div>
  );
}

export default App;
