import React from 'react';
import PropTypes from 'prop-types';
import './custom-table.scss';

const CustomTableRows = ({rows, onDelete, onClick}) => {
    return(
        <tr className="hover_row" onClick={ onClick }>
            <td>{ rows.username }</td>
            <td>{ rows.name }</td>
            <td className="shaw-link">{ rows.email }</td>
            <td className="shaw-link">{ rows.address.city }</td>
            <td>{ 1 }</td>
            <td>{ 1 }</td>
            <td className="shaw-link">{ rows.post }</td>
            <td className="shaw-link">{ rows.album }</td>
            <td>{ rows.photo }</td>
            <td onClick={ onDelete }><i className="far fa-trash-alt style-icons"></i></td>
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
