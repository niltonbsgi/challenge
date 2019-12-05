import React from 'react';
import { withRouter } from 'react-router-dom';
import HeaderRegistration from '../../component/headerRegistration/header-registration';
import CustomLabel from '../../component/buttons-label/custom-label';
import CustomInput from '../../component/buttons-label/custom-input';
import CustomCheckbox from  '../../component/buttons-label/custom-checkbox';
import CustomRadioButton from '../../component/buttons-label/custom-radiobutton';
import CustomButton from '../../component/buttons-label/custom-button';
import LoadingOverlay from 'react-loading-overlay';
import './user.scss';

const style = {
    horizontalBar: {
        display:'inline-block',
        width:'83%',
        borderBottom:'solid 00.09em',
        borderColor: '#D3D3D3',
        marginLeft: '10%'
    }
}
const HorizontalBar = () =>{
    return <div style={style.horizontalBar}><br/></div>
}
class ViewUserDetail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: undefined,
            isActive: false,
            Username: "",
            Name: "",
            Email: "",
            City: "",
            Aways: false,
            Sometimes: false,
            Never: false,
            Sun: false,
            Mon: false,
            Tue: false,
            Wed: false,
            Thu: false,
            Fri: false,
            Sat: false
        }

        this.handleChangeValue=this.handleChangeValue.bind(this)
    }

    handleChangeValue(target, value ){
        this.setState({...this.state, [target]: value})
    }

    componentDidMount(){

        const { users, match, daysWeek, rideInGroup } = this.props

        var selecttedItem = users.filter(item => item.id.toString() === match.params.id )[0]
        if(selecttedItem !== undefined)
        {debugger
            var days = daysWeek.filter(item => item.id.toString() === match.params.id)[0] || {}
            var ride = rideInGroup.filter(item => item.id.toString() === match.params.id)[0] || {}
            this.setState({...this.state,
                id: match.params.id,
                Username: selecttedItem.username,
                Name: selecttedItem.name,
                Email: selecttedItem.email,
                City: selecttedItem.address.city,
                Sun: (days.sun !== "" && days.sun !== undefined),
                Mon: (days.mon !== "" && days.mon !== undefined),
                Tue: (days.tue !== "" && days.tue !== undefined),
                Wed: (days.wed !== "" && days.wed !== undefined),
                Thu: (days.thu !== "" && days.thu !== undefined),
                Fri: (days.fri !== "" && days.fri !== undefined),
                Sat: (days.sat !== "" && days.sat !== undefined),
                Aways: ride.always,
                Sometimes: ride.sometimes,
                Never: ride.neve,
            })
        }
    }

    render(){

        return (
            <LoadingOverlay
                active={this.state.isActive}
                spinner
                text='Wait please...'
            >
                <React.Fragment>
                    <HeaderRegistration/>
                    <HorizontalBar/>
                    <div className="container">
                        <div className="block-conteiner-one">
                            <div>
                                <CustomLabel>Username</CustomLabel>
                                <CustomInput onChange={ (e)=> this.handleChangeValue("Username", e.target.value) } value={ this.state.Username } />
                            </div>
                            <div>
                                <CustomLabel>Name</CustomLabel>
                                <CustomInput onChange={ (e)=> this.handleChangeValue("Name", e.target.value) } value={ this.state.Name }/>
                            </div>
                            <div>
                                <CustomLabel>E-mail</CustomLabel>
                                <CustomInput onChange={ (e)=> this.handleChangeValue("Email", e.target.value) } value={ this.state.Email }/>
                            </div>

                            <CustomButton onClick={ (e)=> {
                                e.preventDefault();
                                this.setState({...this.state, isActive: true})

                                // this.props.onPostRideInGroup(this.state)
                                //     .then(()=>{
                                //         this.setState({...this.state, isActive: false})
                                //     })
                                //     .catch(()=>{
                                //         this.setState({...this.state, isActive: false})
                                //     })

                                this.props.onPostUser(this.state)
                                    .then(()=>{
                                        this.setState({...this.state, isActive: true})
                                    })
                                    .catch(()=>{
                                        this.setState({...this.state, isActive: true})
                                    })
                            }}
                            >
                                Save
                            </CustomButton>
                            <CustomButton
                                secundary={ true }
                                onClick={ ()=> this.props.history.push('/user_list/') }
                            >
                                Dischard
                            </CustomButton>

                        </div>
                        <div className="block-conteiner-two">
                            <div>
                                <CustomLabel>City</CustomLabel>
                                <CustomInput onChange={ (e)=> this.handleChangeValue("City", e.target.value) } value={ this.state.City }/>
                            </div>

                            <div className="display-checkbox">
                                <CustomRadioButton title="Aways" checked={ this.state.Aways } onChange={(e)=> this.handleChangeValue("Aways", e.target.checked) } />
                            </div>
                            <div className="display-checkbox">
                                <CustomRadioButton title="Sometimes" checked={ this.state.Sometimes } onChange={(e)=> this.handleChangeValue("Sometimes", e.target.checked) }/>
                            </div>
                            <div className="display-checkbox">
                                <CustomRadioButton title="Never" checked={ this.state.Never } onChange={(e)=> this.handleChangeValue("Never", e.target.checked) }/>
                            </div>

                            <CustomLabel>Days of the week</CustomLabel>
                            <div className="display-checkbox">
                                <CustomCheckbox title="Sun" checked={ this.state.Sun } onChange={(e)=> this.handleChangeValue("Sun", e.target.checked) }/>
                            </div>
                            <div className="display-checkbox">
                                <CustomCheckbox title="Mon" checked={ this.state.Mon } onChange={(e)=> this.handleChangeValue("Mon", e.target.checked) }/>
                            </div>
                            <div className="display-checkbox">
                                <CustomCheckbox title="Tue" checked={ this.state.Tue } onChange={(e)=> this.handleChangeValue("Tue", e.target.checked) }/>
                            </div>
                            <div className="display-checkbox">
                                <CustomCheckbox title="Wed" checked={ this.state.Wed } onChange={(e)=> this.handleChangeValue("Wed", e.target.checked) }/>
                            </div>
                            <div className="display-checkbox">
                                <CustomCheckbox title="Thu" checked={ this.state.Thu } onChange={(e)=> this.handleChangeValue("Thu", e.target.checked) }/>
                            </div>
                            <div className="display-checkbox">
                                <CustomCheckbox title="Fri" checked={ this.state.Fri } onChange={(e)=> this.handleChangeValue("Fri", e.target.checked) }/>
                            </div>
                            <div className="display-checkbox">
                                <CustomCheckbox title="Sat" checked={ this.state.Sat } onChange={(e)=> this.handleChangeValue("Sat", e.target.checked) }/>
                            </div>

                        </div>
                    </div>
                </React.Fragment>
            </LoadingOverlay>
        )
    }
}

export default withRouter(ViewUserDetail);
