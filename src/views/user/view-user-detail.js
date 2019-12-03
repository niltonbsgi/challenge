import React from 'react';
import { withRouter } from 'react-router-dom';
import HeaderRegistration from '../../component/headerRegistration/header-registration';
import CustomLabel from '../../component/buttons-label/custom-label';
import CustomInput from '../../component/buttons-label/custom-input';
import CustomCheckbox from  '../../component/buttons-label/custom-checkbox';
import CustomRadioButton from '../../component/buttons-label/custom-radiobutton';
import CustomButton from '../../component/buttons-label/custom-button';
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
    }
      
    render(){
      
        return (
            <React.Fragment>
                <HeaderRegistration/>
                <HorizontalBar/>
                <div className="container">
                    <div className="block-conteiner-one">
                        <div>
                            <CustomLabel>Username</CustomLabel>
                            <CustomInput />
                        </div>
                        <div>
                            <CustomLabel>Name</CustomLabel>
                            <CustomInput />
                        </div>
                        <div>
                            <CustomLabel>E-mail</CustomLabel>
                            <CustomInput />
                        </div>
                        
                        <CustomButton>Save</CustomButton>
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
                            <CustomInput />
                        </div>

                        <div className="display-checkbox">
                            <CustomRadioButton title="Aways"/>
                        </div>
                        <div className="display-checkbox">
                            <CustomRadioButton title="Sometimes"/>
                        </div>
                        <div className="display-checkbox">
                            <CustomRadioButton title="Never"/>
                        </div>        

                        <CustomLabel>Days of the week</CustomLabel>
                        <div className="display-checkbox">
                            <CustomCheckbox title="Sun"/>                            
                        </div>    
                        <div className="display-checkbox">
                            <CustomCheckbox title="Mon"/>                            
                        </div>
                        <div className="display-checkbox">
                            <CustomCheckbox title="Tue"/>                            
                        </div>
                        <div className="display-checkbox">
                            <CustomCheckbox title="Wed"/>                            
                        </div>
                        <div className="display-checkbox">
                            <CustomCheckbox title="Thu"/>                            
                        </div>
                        <div className="display-checkbox">
                            <CustomCheckbox title="Fri"/>                            
                        </div>
                        <div className="display-checkbox">
                            <CustomCheckbox title="Sat"/>                            
                        </div>
                        
                    </div>
                </div>
            </React.Fragment>    
        )
    }
}

export default withRouter(ViewUserDetail);
