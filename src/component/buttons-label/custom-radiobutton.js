import React from 'react';
import './buttons-label.scss';
const CustomRadioButton = ({title}) =>{
    return( 
        <React.Fragment> 
            <label className="container-radio">{ <label>{title}</label> }
                <input className="input-radio" type="radio" name="radio"/>
                <span className="checkmark-radio"></span>
            </label>            
        </React.Fragment>
    )
}

export default CustomRadioButton