import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, IndexRedirect } from 'react-router-dom';
import ConteinerUserList from '../../views/user/conteiner-usert-list';
import ConteinerUserForm from '../../views/user/conteiner-usert-form';


const Routes = () => {
    return (
      <Router>
        <div>
            <Switch>
                <Route exact path='/user_list/' component={ConteinerUserList} />
                <Route exact path='/user_form/' component={ConteinerUserForm} />
                <Redirect from='*' to='/user_list/' />
            </Switch>
        </div>
      </Router>
    );
  }

  export default Routes;


