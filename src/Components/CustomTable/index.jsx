import React from "react";
import CustomFilters from "../CustomFilters";
import CustomPagination from "../CustomPagination";
import LoadingSpinner from "../Loader";

import "./style.css";

const CustomTable = (props) => {
  return (
    <>
      <CustomFilters
        searchValue={props?.searchValue}
        setSearchValue={props?.setSearchValue}
        setSelectedEntries={props?.setSelectedEntries}
        dateFilterTitle={props?.dateFilterTitle}
        dateFilterTitle2={props?.dateFilterTitle2}
        filterFrom={props?.filterFrom}
        setFilterFrom={props?.setFilterFrom}
        filterTo={props?.filterTo}
        setFilterTo={props?.setFilterTo}
        applyFilter={props?.applyFilter}
        clearFilters={props?.clearFilters}
        selectOptions={props?.selectOptions}
      />
      <div className="customTable">
        <table>
          <thead>
            <tr>
              {props?.headers.map((header) => (
                <th key={header.key}>{header.title}</th>
              ))}
            </tr>
          </thead>
          {props.loading ? (
            <tbody>
              <tr>
                <td
                  colSpan={props?.headers?.length}
                  style={{ textAlign: "center" }}
                >
                  <LoadingSpinner />
                </td>
              </tr>
            </tbody>
          ) : props?.children?.props?.children?.length === 0 ? (
            <tbody>
              <tr>
                <td
                  colSpan={props?.headers?.length}
                  style={{ textAlign: "center" }}
                >
                  No Records Found
                </td>
              </tr>
            </tbody>
          ) : (
            props.children
          )}
        </table>
      </div>
      <CustomPagination
        showingItem={props.showingItem}
        totalItems={props.totalItems}
        currentPage={props.currentPage}
        totalPages={props.totalPages}
        setCurrentPage={props.setCurrentPage}
        user={props.user ?? false}
      />
    </>
  );
};

export default CustomTable;
