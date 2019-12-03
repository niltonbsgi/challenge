import React from 'react';
import PropTypes from 'prop-types';
import './buttons-label.scss';
const CustomInput = ({onChange, value}) =>{
    return(
        <input className="input" type="text" onChange={ onChange } value={ value }/>
    )
}

CustomInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.any
};

CustomInput.defaultProps = {
    onChange: ()=>{},
    value: {}
}

export default CustomInput
