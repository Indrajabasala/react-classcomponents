import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Welcome from './welcome';
import Register from './register';
import Doctorslist from './doctorslist';
import  Avaibletimings from './avaibletimings'

const Routes = () =>{
    
return(
  <Router>

      <ul>
      <li>
            <Link to='/'>Welcome</Link>
          </li>
          <li>
           <Link to='/register'>Register</Link>
          </li>
          <li>
           <Link to='/doctorslist'>Doctorslist</Link>
          </li>
          
          <li>
          <Link to='/avaibletimings'>Avaibletimings</Link>
          </li>
        </ul>

        <hr />
    <Switch> 
    <Route exact path="/">
            <Welcome /> 
          </Route>

           <Route  path="/register">
            <Register />
          </Route>

              
          <Route  path="/doctorslist">
            <Doctorslist />
          </Route>
          <Route  path="/avaibletimings">
            <Avaibletimings />
          </Route>


    </Switch>
  </Router>

)
}

export default Routes;