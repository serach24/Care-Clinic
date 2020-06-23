/* New cleaned up version of App.js */
import React from 'react';

// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import AdminPage from './react-components/AdminPage';
import Feedback from './react-components/FeedBack';

class App extends React.Component {

  // a 'global' state that you can pass through to any child componenets of App.
  //   In the Routes below they are passed to both the Home and Queue states.
  state = {
    abc: "123"
  }

  render() {
    return (
        <div>
        <BrowserRouter>
          <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
            { /* Each Route below shows a different component depending on the exact path in the URL  */ }
            <Route exact path='/' render={() => 
Phase1_Ken_AdminPage
                            (<AdminPage state={this.state}/>)}/>
                           // (<Feedback state={this.state}/>)}/>
 master
          </Switch>
        </BrowserRouter>
      </div>
    );  
  }
}

export default App;
