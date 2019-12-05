import React from 'react';
import PropTypes from 'prop-types';
import './header-list.scss';

const style = {
    margin:{
        marginTop: '20px'
    }
}

const HeaderTitle = (props) => {
    return (
        <div style={ style.margin }>
            <div className="header-title">
                { props.children }
            </div>
            <div className="header-border"/>
            <div className="search" >
				<i className="fas fa-search"></i>
				<input onChange={ props.onChange } className="search-input" placeholder="Filter table content"/>
			</div>
        </div>
    )
}

HeaderTitle.propTypes = {
    onChange: PropTypes.func
};

HeaderTitle.defaultProps = {
    onChange: ()=>{}
};

export default HeaderTitle
