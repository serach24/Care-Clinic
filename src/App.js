import React from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import AdminPage from './pages/AdminPage';
import Feedback from './pages/FeedBack';

class App extends React.Component {
  render (){
    return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() =>
                          (<Home/>)}/>
          <Route exact path='/login' render={() =>
                          (<Login/>)}/>
          <Route exact path='/admin' render={() =>
                          (<AdminPage/>)}/>
          <Route exact path='/feedback' render={() =>
                          (<Feedback/>)}/>
        </Switch>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
