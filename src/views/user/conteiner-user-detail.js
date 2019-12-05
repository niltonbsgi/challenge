import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from 'react-page-loading'
import ViewUserDetail from './view-user-detail';
import { _Post_User } from './redux/action-user';
import { url_request } from './redux/reducer-user';

var user_json = {
  "name": "Jao",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56445",
  "website": "hildegard.org",
  "company": {
    "name": "Teste",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    onPostUser: (state) => {
      user_json.username = state["Username"]
      user_json.name = state["Name"]
      user_json.email = state["Email"]
      user_json.address.city = state["City"]

      const promise = _Post_User(url_request.users, user_json);
      dispatch(promise);
      return promise;
    }
  }
}

const mapStateToProps = (state) => {
  const { users, posts, albums, photos, daysWeek, rideInGroup, error } = state.ReducerStoreUser;
  return { users, posts, albums, photos, daysWeek, rideInGroup, error };
}

class ConteinerUserDetail extends React.Component{
  constructor(props){
    super(props)
  };

  render(){
    return (
      <Page loader={"bar"} color={"#00cc99"} size={6}>
        <ViewUserDetail {...this.props} {...this.state}/>
      </Page>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ConteinerUserDetail));
