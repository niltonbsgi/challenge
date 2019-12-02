import React from 'react';
import { connect } from 'react-redux';
import ViewUserList from './view-user-list';
import { _Get_User_List } from './redux/action-user';
import { url_request } from './redux/reducer-user';

const mapDispatchToProps = (dispatch) => {
    return {
        onGetUserList: (url) => { 
            const promise = _Get_User_List(url);
            dispatch(promise);
            return promise;
        }
    }
}

const mapStateToProps = (state) => {
    const { users, error } = state.ReducerStoreUser;
    return { users, error };
}


class ConteinerUserList extends React.Component{

    componentDidMount(){
        this.props.onGetUserList(url_request.users)
            .then(()=>{
                console.log(this.props.users)
            })
    }
    render(){
        return <ViewUserList {...this.props}/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConteinerUserList);