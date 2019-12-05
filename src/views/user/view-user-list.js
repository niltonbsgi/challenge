import React from 'react';
import { withRouter } from 'react-router-dom';
import HeaderList from '../../component/headerList/header-list';
import HeaderTitle from '../../component/headerList/header-title';
import CustomTable from '../../component/customTable/custom-table';
import CustomTableRows from '../../component/customTable/custom-table-rows';

const geo_location = "https://www.google.com/maps/search/?api=1&query=@lat,@long"
const mail_link = "mailto: @email"
const array_days = ["sun","mon","tue","wed","thu","fri","sat"]
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
        this.state={};
        this.handleClick = this.handleClick.bind(this)
        this.handleDaysOfWeek = this.handleDaysOfWeek.bind(this)
        this.handleRideInGroup = this.handleRideInGroup.bind(this)
        this.handleRow = this.handleRow.bind(this)
    }

    handleClick(e, id){

        if( e.target.id !=="3" && e.target.id !=="4" && (e.target.id !=="10" && e.target.id !=="") ){
            this.props.history.push(`/user_form/${id}`)
        }
    }

    handleDaysOfWeek(daysWeek, element){

        var EveryDay = 0
        var Weekend = 0
        var Days = ""
        var item_row = ""
        var result = daysWeek.filter(item => item.id === element.id )[0]

        if (result !== undefined){

            for (let index = 0; index < array_days.length; index++) {

                let field =  result[array_days[index]] 
                if(field !== ""){
                    EveryDay++
                    item_row += `${field},`
                }else if(((field ==="sun")||(field ==="sat"))&&(Weekend<3)){
                    Weekend++;
                }
            }
        }

        if(EveryDay===7)
            item_row = "Every day"
        else if(Weekend > 0)
            item_row = "Weekends"
        else if((EveryDay < 3) && (EveryDay > 1))
            item_row = "Week days"

        return item_row
    }

    handleRideInGroup(rideInGroup, element){debugger
        var ride = rideInGroup.filter(item => item.id === element.id)[0] || {}
        return (ride.always? "Always": (ride.sometimes? "Sometimes": "Never"))
    }

    handleRow(element){

        const { posts, albums, photos, daysWeek, rideInGroup } = this.props

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

        if (daysWeek.length > 0) {
            Object.assign(element, {daysOfWeek:this.handleDaysOfWeek(daysWeek, element)});
        }

        if(rideInGroup.length > 0){
            Object.assign(element, {rideInGroup:this.handleRideInGroup(rideInGroup, element)});
        }

        let latitud  = element.address.geo.lat || ""
        let longitud = element.address.geo.lng || ""
        if (longitud !== "" && longitud!== undefined){
            element.address.city = <a target="_blank" className="highlight" href={ geo_location.replace("@lat",latitud).replace("@long",longitud) }>{element.address.city}</a>
        }

        element.email = <a target="_blank" className="highlight" href={ mail_link.replace("@email", element.email) }>{element.email}</a>
    }

    render(){

        const { users } = this.props

        return (
            <React.Fragment>
                <HeaderList/>
                <HeaderTitle>
                    <h1>Users</h1>
                </HeaderTitle>
                <CustomTable Header={ json_header } >
                    {users.map((element, i)=>{

                        { this.handleRow(element) }

                        return(
                            <CustomTableRows
                                onClick={ (e)=> this.handleClick(e, element.id) }
                                onDelete={()=> alert(`Delete ${element.name}`)}
                                key={i}
                                rows={ element }
                            />
                        )
                    })}
                </CustomTable>
            </React.Fragment>
        )
    }
}

export default withRouter(ViewUserList);
