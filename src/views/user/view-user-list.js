import React from 'react';
import HeaderList from '../../component/headerList/header-list';
import HeaderTitle from '../../component/headerList/header-title';
import CustomTable from '../../component/customTable/custom-table';
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
              
    }
    render(){
        return (
            <React.Fragment>
                <HeaderList/>
                <HeaderTitle>
                    <h1>Users</h1>
                </HeaderTitle>
                <CustomTable Header={ json_header } Rows={ this.props.users }/>      
            </React.Fragment>    
        )
    }
}

export default ViewUserList;