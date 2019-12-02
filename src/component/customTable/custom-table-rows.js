import React from 'react';
import PropTypes from 'prop-types';
import './custom-table.scss';

const CustomTableRows = ({rows}) => {
    return(
        <tr className="hover_row">
            <td>{ rows.username }</td>
            <td>{ rows.name }</td>
            <td className="shaw-link">{ rows.email }</td>
            <td className="shaw-link">{ rows.address.city }</td>
            <td>{ 1 }</td>
            <td>{ 1 }</td>
            <td className="shaw-link">{ rows.post }</td>
            <td className="shaw-link">{ rows.album }</td>
            <td>{ rows.photo }</td>
            <td><i className="far fa-trash-alt style-icons"></i></td>
        </tr>
    )

}

CustomTableRows.propTypes = {
    Rows: PropTypes.object
};

CustomTableRows.defaultProps = {
    Rows: {}
};

export default CustomTableRows;
