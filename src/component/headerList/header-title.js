import React from 'react';
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
				<input className="search-input" placeholder="Filter table content"/>
			</div>
        </div>    
    ) 
}

export default HeaderTitle