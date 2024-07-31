import { useState, useEffect, useCallback } from "react";
import { DashboardLayout } from "../../../Components/AdminLayout/DashboardLayout";
import CustomTable from "../../../Components/CustomTable";
import UseTableControls from "../../../Config/UseTableControls"; // Context States
import {
  dateFormat,
  getStatusProps,
  serialNumber,
} from "../../../Utils/helper";
import { userHeaders } from "../../../Config/TableHeaders"; // Table Headers
import { generalStatus } from "../../../Config/TableStatus"; // Filter Status
import { getAll, post } from "../../../Services/Api"; //Api Service
import TableDropdown from "../../../Components/TableDropdown";
import "./style.css";
import withModal from "../../../Components/withModal"; //Higher Order Component
import { userManagementData } from "../../../Config/Data";

const UserManagement = ({ showModal }) => {
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
        const response = userManagementData;
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

  //First Modal
  const handleStatusChange = (id, status) => {
    showModal(
      `Are you sure you want to ${
        status === "Active" ? "Inactivate" : "Activate"
      } this User?`,
      () => updateStatus(status, id)
    );
  };

  //Second Modal
  const updateStatus = async (status, id) => {
    try {
      const response = await post(`/admin-api/users/${id}`);
      if (response.status) {
        await fetchUsers();
        showModal(
          `User ${
            status === "Active" ? "inactivated" : "activated"
          } successfully`,
          null,
          true
        );
      }
    } catch (error) {
      console.error("Error updating user status:", error);
    }
  };

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
    <DashboardLayout pageTitle="User Management">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
          <h2 className="mainTitle my-4">User Management</h2>
            <div className="dashCard">
              <div className="row mb-3">
                <div className="col-12">
                  <CustomTable
                    loading={loading}
                    headers={userHeaders}
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
                        title: "Filter By Status",
                        options: generalStatus,
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
                          <td>{item.full_name}</td>
                          <td>{item.email}</td>
                          <td>{dateFormat(item.created_at)}</td>
                          <td
                            className={
                              getStatusProps(item.status_detail).className
                            }
                          >
                            {getStatusProps(item.status_detail).text}
                          </td>
                          <td>
                            <TableDropdown
                              itemId={item.id}
                              linkPath="/admin/user-management"
                              handleStatusChange={handleStatusChange}
                              statusDetail={item.status_detail}
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

export default withModal(UserManagement); // Bind with HOC
