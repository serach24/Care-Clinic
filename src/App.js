import React from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import AdminPage from './pages/AdminPage';

import AdminSideBar from './components/Admin/AdminSideBar';

import Feedback from './pages/FeedBack';
import Storys from './pages/Storys';
import About from './pages/About';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() =>
              (<Home />)} />
            <Route exact path='/login' render={() =>
              (<Login />)} />
            <Route exact path='/admin' render={() =>
              (<AdminPage />)} />
            {/* <Route exact path='/admin' render={() =>
              (<AdminSideBar />)} /> */}
            <Route exact path='/feedback' render={() =>
              (<Feedback />)} />
            <Route exact path='/story1' render={() =>
              (<Storys />)} />
            <Route exact path='/about' render={() =>
              (<About />)} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
