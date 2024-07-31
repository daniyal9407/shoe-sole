import { useState, useEffect, useCallback } from "react";
import { DashboardLayout } from "../../../Components/AdminLayout/DashboardLayout";
import CustomTable from "../../../Components/CustomTable";
import UseTableControls from "../../../Config/UseTableControls"; // Context States
import {
  dateFormat,
  getStatusProps,
  serialNumber,
} from "../../../Utils/helper";
import { queryHeaders } from "../../../Config/TableHeaders"; // Table Headers
import {  userTypeStatus } from "../../../Config/TableStatus"; // Filter Status
import { getAll, post } from "../../../Services/Api"; //Api Service
import TableDropdown from "../../../Components/TableDropdown";
import "./style.css";
import withModal from "../../../Components/withModal"; //Higher Order Component
import { queryManagementData } from "../../../Config/Data";

const QueryManagement = () => {
  const {
    currentPage,
    setCurrentPage,
    totalRecords,
    setTotalRecords,
    totalPages,
    setTotalPages,
    searchValue,
    setSearchValue,
    selectedValue,
    setSelectedValue,
    selectedEntries,
    setSelectedEntries,
    filterFrom,
    setFilterFrom,
    showData,
    setShowData,
    filterTo,
    setFilterTo,
    loading,
    setLoading,
    selectedValueTwo,
    setSelectedValueTwo,
    dateFilterTitle
  } = UseTableControls();

  const [userData, setUserData] = useState([]);

  //Fetch Users Function
  const fetchUsers = useCallback(
    async (filter = "") => {
      try {
        setLoading(true);
        // const url = `/admin-api/users?page=${currentPage}&search=${searchValue}&per_page=${selectedEntries}${filter}`;
        const response = queryManagementData;
        // const response = await getAll(url);
        if (response.status) {
          const { data, total, per_page, current_page, to } = response.detail;
          setUserData(data);
          setShowData(to);
          setCurrentPage(current_page);
          setTotalRecords(total);
          setTotalPages(Math.ceil(total / per_page));
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    },
    [
      currentPage,
      searchValue,
      selectedEntries,
      setLoading,
      setShowData,
      setCurrentPage,
      setTotalRecords,
      setTotalPages,
    ]
  );

  //Apply Filters
  const applyFilter = () => {
    const filter = `&status=${selectedValue}&fromDate=${filterFrom}&toDate=${filterTo}`;
    fetchUsers(filter);
  };

  //Clear Filters
  const clearFilters = () => {
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <DashboardLayout pageTitle="Query Management">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
          <h2 className="mainTitle my-4">Query Management</h2>
            <div className="dashCard">
              <div className="row mb-3">
                <div className="col-12">
                  <CustomTable
                    loading={loading}
                    headers={queryHeaders}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    setSelectedEntries={setSelectedEntries}
                    dateFilterTitle="From"
                    dateFilterTitle2="To"
                    filterFrom={filterFrom}
                    setFilterFrom={setFilterFrom}
                    filterTo={filterTo}
                    setFilterTo={setFilterTo}
                    applyFilter={applyFilter}
                    clearFilters={clearFilters}
                    showingItem={showData}
                    totalItems={totalRecords}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    setCurrentPage={setCurrentPage}
                    selectOptions={[
                      {
                        title: "Filter By User Type",
                        options: userTypeStatus,
                        selectedValue,
                        setSelectedValue,
                      },
                    ]}
                  >
                    <tbody>
                      {userData.map((item, index) => (
                        <tr key={item.id}>
                          <td>
                            {serialNumber(
                              (currentPage - 1) * selectedEntries + index + 1
                            )}
                          </td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.date}</td>
                          <td>{item.type}</td>
                          <td>
                            <TableDropdown
                              itemId={item.id}
                              linkPath="/admin/query-management"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </CustomTable>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(QueryManagement); // Bind with HOC
