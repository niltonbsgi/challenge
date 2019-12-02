import React from 'react';
import './custom-table.scss';
import PropTypes from 'prop-types';

import CustomTableRows from './custom-table-rows';

const CustomTable = ({Header, Rows}) => {
  
    return(
        <table className="custom-table-grid">
            <tr>
                {Header.map((element)=>{
                    return <th>{ element.name }</th>
                })}
            </tr>

            {Rows.map((element)=>{
                return <CustomTableRows rows={ element }/>
            })}
        </table>
    )
}

CustomTable.propTypes = {
    Header: PropTypes.array,
    Rows: PropTypes.array
};

CustomTable.defaultProps = {
    Header: [],
    Rows: []
};


export default CustomTable;