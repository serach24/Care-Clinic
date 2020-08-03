import React from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import AdminPage from './pages/AdminPage';
import Navbar from './components/ui/NavBar';
import Feedback from './pages/FeedBack';
import Storys from './pages/Storys';
import About from './pages/About';
import ProfilePage from './pages/ProfilePage';

import HealthHistory from './pages/HealthHistory';
import Page404 from './pages/404';
import Doctors from './pages/Doctors';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginState:0,

            // the data below need a serverCall to get
            userId:"nli000000"
        };
        this.changeLogINState = this.changeLogINState.bind(this);
        this.setUserId = this.SetUserId.bind(this);
    }

    whichLogInStateAmI(){
        return this.state.loginState;
    }

    SetUserId(newState){
        this.setState({
            userId: newState
        });
    }

    changeLogINState(newState){
        this.setState({
            loginState: newState
        },() => console.log(this.state.loginState));
    }


  render (){
    return(
    <div>
      <BrowserRouter>
        <div>
        <Navbar which={this.whichLogInStateAmI()} change={this.changeLogINState} UUid={this.state.userId}/>
        {/* <Page404/> */}
        <Switch>
          <Route exact path='/' render={() =>
                          (<Home which={this.whichLogInStateAmI()} change={this.changeLogINState} UUid={this.state.userId}/>)}/>
          <Route exact path='/login' render={() =>
                          (<Login which={this.whichLogInStateAmI()} change={this.changeLogINState} UUid={this.state.userId} SetUUid={this.setUserId}/>)}/>

          {this.state.loginState===2 && <Route exact path='/admin' render={() =>
                          (<AdminPage which={this.whichLogInStateAmI()} change={this.changeLogINState} UUid={this.state.userId}/>)}/>}
          <Route exact path='/feedback' render={() =>
                          (<Feedback which={this.whichLogInStateAmI()} change={this.changeLogINState} UUid={this.state.userId}/>)}/>
          <Route exact path='/story1' render={() =>
                          (<Storys which={this.whichLogInStateAmI()} change={this.changeLogINState} UUid={this.state.userId}/>)}/>
          <Route exact path='/about' render={() =>
                          (<About which={this.whichLogInStateAmI()} change={this.changeLogINState} UUid={this.state.userId}/>)}/>
          <Route exact path={"/healthHistory"+this.state.userId} render={() =>
                          (<HealthHistory which={this.whichLogInStateAmI()} change={this.changeLogINState} UUid={this.state.userId}/>)}/>
          <Route exact path={"/healthHistory"+this.state.userId+"T"} render={() =>
                          (<HealthHistory isEdit={true} which={this.whichLogInStateAmI()} change={this.changeLogINState} UUid={this.state.userId}/>)}/>
          {this.state.loginState!==0 && <Route exact path={"/"+this.state.userId} render={() =>
                          (<ProfilePage which={this.whichLogInStateAmI()} change={this.changeLogINState} UUid={this.state.userId}/>)}/>}

          {((this.state.loginState=== 1) || (this.state.loginState === 2) || (this.state.loginState=== 3) )

                          ? <Route exact path='/doctorlist' render={() =>
                            (<Doctors which={this.whichLogInStateAmI()} change={this.changeLogINState} UUid={this.state.userId}/>)}/> 
                          : <Route exact path='/doctorlist' render={() =>
                            (<Login which={this.whichLogInStateAmI()} change={this.changeLogINState} UUid={this.state.userId} SetUUid={this.setUserId}/>)}/>
                          }
          <Route component={Page404}/>
        </Switch>
        </div>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
