import React from 'react';
import './buttons-label.scss';
const CustomCheckbox = ({title}) =>{
    return(
        <React.Fragment> 
            <label className="container-checkbox">{ title }
                <input className="input-checkbox" type="checkbox"/>
                <span className="checkmark rounded"></span>
            </label>            
        </React.Fragment>
    )
}

export default CustomCheckbox