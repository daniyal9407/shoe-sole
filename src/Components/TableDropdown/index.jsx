import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const TableDropdown = ({ itemId, linkPath, handleStatusChange, statusDetail }) => {
    return (
        <Dropdown className="tableDropdown">
            <Dropdown.Toggle variant="transparent" className="notButton classicToggle">
                <FontAwesomeIcon icon={faEllipsisV} />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end" className="tableDropdownMenu">
                <Link to={`${linkPath}/${itemId}`} className="tableAction">
                   <FontAwesomeIcon icon={faEye}  className='mb-0 mt-1'/> View
                </Link>
                {/* {handleStatusChange && (
                    <button
                        onClick={() => handleStatusChange(itemId, statusDetail)}
                        className="tableAction"
                    >
                        {statusDetail === "Inactive" ? "Activate" : "Inactivate"}
                    </button>
                )} */}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default TableDropdown;
