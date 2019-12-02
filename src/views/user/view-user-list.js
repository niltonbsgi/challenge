import React from 'react';
import HeaderList from '../../component/headerList/header-list';
import HeaderTitle from '../../component/headerList/header-title';
import CustomTable from '../../component/customTable/custom-table';
import CustomTableRows from '../../component/customTable/custom-table-rows';

const json_header = [
    {name: "Username"},
    {name: "Name"},
    {name: "E-mail"},
    {name: "City"},
    {name: "Ride in group"},
    {name: "Day of the week"},
    {name: "Posts"},
    {name: "Albums"},
    {name: "Photo"},
    {name: <a>&emsp;&emsp;</a>}
]


class ViewUserList extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){

    }

    render(){

        const { users, posts, albums, photos } = this.props

        return (
            <React.Fragment>
                <HeaderList/>
                <HeaderTitle>
                    <h1>Users</h1>
                </HeaderTitle>
                <CustomTable Header={ json_header } >
                    {users.map((element, i)=>{

                        if (posts.length > 0) {
                            var result = posts.filter(item => item.userId === element.id )
                            Object.assign(element, {post:result.length});
                        }

                        if (albums.length > 0) {
                            var result = albums.filter(item => item.userId === element.id )
                            Object.assign(element, {album:result.length});
                        }

                        if ((photos.length > 0) && (albums.length > 0))  {

                            var album = albums.filter(item => item.userId === element.id )[0] || []

                            var result = photos.filter(item => item.albumId === album.id )
                            Object.assign(element, {photo:result.length});
                        }

                        return <CustomTableRows onClick={ ()=>  } onDelete={()=> alert(`Delete ${element.name}`)} key={i} rows={ element }/>
                    })}
                </CustomTable>
            </React.Fragment>
        )
    }
}

export default ViewUserList;
