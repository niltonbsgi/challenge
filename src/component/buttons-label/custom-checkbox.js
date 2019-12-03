import React from 'react';
import PropTypes from 'prop-types';
import './buttons-label.scss';
const CustomCheckbox = ({title, onChange, checked}) =>{
    return(
        <React.Fragment>
            <label className="container-checkbox">{ title }
                <input className="input-checkbox" type="checkbox" name="radio" onChange={ onChange } checked={ checked }/>
                <span className="checkmark rounded"></span>
            </label>
        </React.Fragment>
    )
}

CustomCheckbox.propTypes = {
    onChange: PropTypes.func,
    checked: PropTypes.bool
};

CustomCheckbox.defaultProps = {
    onChange: ()=>{},
    checked: false
}
export default CustomCheckbox
