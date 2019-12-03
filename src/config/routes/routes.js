import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, IndexRedirect } from 'react-router-dom';
import ConteinerUserList from '../../views/user/conteiner-user-list';
import ConteinerUserDetail from '../../views/user/conteiner-user-detail';


const Routes = () => {
    return (
      <Router>
        <div>
            <Switch>
                <Route exact path='/user_list/' component={ConteinerUserList} />
                <Route exact path='/user_form/:id' component={ConteinerUserDetail} />
                <Route exact path='/user_form/new' component={ConteinerUserDetail} />
                <Redirect from='*' to='/user_list/' />
            </Switch>
        </div>
      </Router>
    );
  }

  export default Routes;


