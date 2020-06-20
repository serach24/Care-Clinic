import React from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';


class App extends React.Component {
  render (){
    return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() =>
                          (<Home/>)}/>
        </Switch>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
