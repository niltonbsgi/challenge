import React from 'react';
import './buttons-label.scss';
const CustomLabel = ({children}) =>{
    return( 
    <label className="custom-label">
        {children}
    </label>
    )
}

export default CustomLabel