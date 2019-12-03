import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ViewUserList from './view-user-list';
import { _Get_User_List, _Get_Post_By_User_List, _Get_Album_By_User_List, _Get_Photo_By_Album_List } from './redux/action-user';
import { url_request } from './redux/reducer-user';

const mapDispatchToProps = (dispatch) => {
    return {
        onGetUserList: (url) => {
            const promise = _Get_User_List(url);
            dispatch(promise);
            return promise;
        },
        onGetPostList: (url) => {
            const promise = _Get_Post_By_User_List(url);
            dispatch(promise);
            return promise;
        },
        onGetAlbumList: (url) => {
            const promise = _Get_Album_By_User_List(url);
            dispatch(promise);
            return promise;
        },
        onGetPhotosList: (url) => {
            const promise = _Get_Photo_By_Album_List(url);
            dispatch(promise);
            return promise;
        }
    }
}

const mapStateToProps = (state) => {
    const { users, posts, albums, photos, error } = state.ReducerStoreUser;
    return { users, posts, albums, photos, error };
}

class ConteinerUserList extends React.Component{

    constructor(props){
        super(props)
    };

    componentDidMount(){
        this.props.onGetUserList(url_request.users)
            .then(()=>{
                this.props.onGetPostList(url_request.posts)
                this.props.onGetAlbumList(url_request.album)
                this.props.onGetPhotosList(url_request.photos)
            })
    }
    render(){
        return <ViewUserList {...this.props} {...this.state}/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ConteinerUserList));
