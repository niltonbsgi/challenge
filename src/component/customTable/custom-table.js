import React from 'react';
import './custom-table.scss';
import PropTypes from 'prop-types';

const CustomTable = ({Header, children}) => {
    return(
        <table className="custom-table-grid">
            <tr>
                {Header.map((element, i)=>{
                    return <th key={i}>{ element.name }</th>
                })}
            </tr>

            { children }

        </table>
    )
}

CustomTable.propTypes = {
    Header: PropTypes.array
};

CustomTable.defaultProps = {
    Header: []
};


export default CustomTable;
