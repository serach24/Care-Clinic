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
    constructor(props) {
        super(props);
        this.state = {
            loginState:0
        };
        this.changeLogINState = this.changeLogINState.bind(this);
    }

    whichLogInStateAmI(){
        return this.state.loginState;
    }
    changeLogINState(newState){
        this.setState({
            loginState: newState
        });
    }

  render (){
    return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() =>
                          (<Home/>)}/>
          <Route exact path='/login' render={() =>
                          (<Login which={this.whichLogInStateAmI()} change={this.changeLogINState} />)}/>
          <Route exact path='/admin' render={() =>
                          (<AdminPage which={this.whichLogInStateAmI()} change={this.changeLogINState}/>)}/>
          <Route exact path='/feedback' render={() =>
                          (<Feedback which={this.whichLogInStateAmI()} change={this.changeLogINState}/>)}/>
          <Route exact path='/story1' render={() =>
                          (<Storys which={this.whichLogInStateAmI()} change={this.changeLogINState}/>)}/>
          <Route exact path='/about' render={() =>
                          (<About which={this.whichLogInStateAmI()} change={this.changeLogINState}/>)}/>
        </Switch>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
