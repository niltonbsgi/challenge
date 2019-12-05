import React from 'react';
import PropTypes from 'prop-types';
import './custom-table.scss';

const CustomTableRows = ({rows, onDelete, onClick}) => {
    return(
        <tr className="hover_row" onClick={ onClick } >
            <td id="1">{ rows.username }</td>
            <td id="2">{ rows.name }</td>
            <td id="3" className="highlight">{ rows.email_link }</td>
            <td id="4" className="highlight">{ rows.city_link }</td>
            <td id="5" >{ rows.rideInGroup }</td>
            <td id="6" >{ rows.daysOfWeek }</td>
            <td id="7" className="highlight">{ rows.post }</td>
            <td id="8" className="highlight">{ rows.album }</td>
            <td id="9" >{ rows.photo }</td>
            <td id="10" onClick={ onDelete }><i className="far fa-trash-alt style-icons"></i></td>
        </tr>
    )
}

CustomTableRows.propTypes = {
    Rows: PropTypes.object,
    onDelete: PropTypes.func,
    onClick: PropTypes.func
};

CustomTableRows.defaultProps = {
    Rows: {},
    onDelete: ()=>{},
    onClick: ()=>{}
};

export default CustomTableRows;
