import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, IndexRedirect } from 'react-router-dom';
import ConteinerUserList from '../../views/user/conteiner-usert-list'

const Routes = () => {
    return (
      <Router>
        <div>
            <Switch> 
                <Route exact path='/user_list/' component={ConteinerUserList} />             
                <Redirect from='*' to='/user_list/' />
            </Switch>
        </div>
      </Router>
    );
  }
  
  export default Routes;

  