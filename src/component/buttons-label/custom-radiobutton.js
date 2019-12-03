import React from 'react';
import PropTypes from 'prop-types';
import './buttons-label.scss';
const CustomRadioButton = ({title, onChange, checked}) =>{
    return(
        <React.Fragment>
            <label className="container-radio">{ <label>{title}</label> }
                <input className="input-radio" type="radio" name="radio" onChange={ onChange } checked={ checked }/>
                <span className="checkmark-radio"></span>
            </label>
        </React.Fragment>
    )
}

CustomRadioButton.propTypes = {
    onChange: PropTypes.func,
    checked: PropTypes.bool
};

CustomRadioButton.defaultProps = {
    onChange: ()=>{},
    checked: false
}

export default CustomRadioButton
