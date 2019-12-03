import React from 'react';
import PropTypes from 'prop-types';
import './buttons-label.scss';
const CustomButton = ({secundary, onClick, children}) =>{
    return( 
        <React.Fragment> 
            <button 
                className={secundary?"secundary-button":""} 
                onClick={ onClick }
            >
                { children }
            </button>                        
        </React.Fragment>
    )
}

CustomButton.propTypes = {
    secundary: PropTypes.bool,
    onClick: PropTypes.func
};

CustomButton.defaultProps = {
    secundary: false,
    onClick: ()=>{}
};
export default CustomButton