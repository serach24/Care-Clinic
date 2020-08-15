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
import Appointment from './pages/Appointment';

import Page404 from './pages/404';
import Doctors from './pages/Doctors';
import { readCookie } from './auth/authUtil'; 
import DoctorPatientList from './pages/DoctorPatientList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginState: 0,
      // the data below need a serverCall to get
      userId: null,
      profile: {}
    };

    this.setloginState = this.setloginState.bind(this);
    this.setUserId = this.setUserId.bind(this);
  }

  setUserId(newState) {
    this.setState({
      userId: newState
    }, () => console.log(this.state.userId + 'logged'));
  }

  setloginState(newState) {
    this.setState({
      loginState: newState
    }, () => console.log(this.state.loginState));
  }

  componentDidMount() {
    readCookie(this)
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar app={this} userId={this.state.userId} />
            {/* <Page404/> */}
            <Switch>
              <Route exact path='/' render={() =>
                (<Home app={this} />)} />
              <Route exact path='/login' render={() =>
                (<Login app={this} />)} />

              {this.state.loginState === 2 && <Route exact path='/admin' render={() =>
                (<AdminPage app={this} />)} />}
              <Route exact path='/feedback' render={() =>
                (<Feedback app={this} />)} />
              <Route path='/article/:id' component={Storys} />

              <Route exact path='/about' render={() =>
                (<About app={this} />)} />
              
              <Route path="/appointment" render={() => (<Appointment app={this}/>)} />
              
              <Route path="/patientList" render={() => (<DoctorPatientList app={this}/>)} />

              {this.state.loginState !== 0 && <Route exact path={"/" + this.state.userId} render={() =>
                (<ProfilePage app={this} />)} />}

              {((this.state.loginState === 1) || (this.state.loginState === 2) || (this.state.loginState === 3))

                ? <Route exact path='/doctorlist' render={() =>
                  (<Doctors app={this} />)} />
                : <Route exact path='/doctorlist' render={() =>
                  (<Login app={this} />)} />
              }
              <Route component={Page404} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
