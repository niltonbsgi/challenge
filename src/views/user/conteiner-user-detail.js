import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ViewUserDetail from './view-user-detail';
//import { _Get_User_List, _Get_Post_By_User_List, _Get_Album_By_User_List, _Get_Photo_By_Album_List } from './redux/action-user';
import { url_request } from './redux/reducer-user';

const mapDispatchToProps = (dispatch) => {
    return {
        onGetUserList: (url) => {
         
        }
    }
}

const mapStateToProps = (state) => {
    const { users, posts, albums, photos, error } = state.ReducerStoreUser;
    return { users, posts, albums, photos, error };
}

class ConteinerUserDetail extends React.Component{

    constructor(props){
        super(props)
    };

    componentDidMount(){
        
    }
    
    render(){
        return <ViewUserDetail/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ConteinerUserDetail));
