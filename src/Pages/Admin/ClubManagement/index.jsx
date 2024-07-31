import { useState, useEffect, useCallback } from "react";
import { DashboardLayout } from "../../../Components/AdminLayout/DashboardLayout";
import CustomTable from "../../../Components/CustomTable";
import UseTableControls from "../../../Config/UseTableControls"; // Context States
import {
  dateFormat,
  getStatusProps,
  serialNumber,
} from "../../../Utils/helper";
import "./style.css";
import { clubHeaders } from "../../../Config/TableHeaders"; // Table Headers
import { generalStatus } from "../../../Config/TableStatus"; // Filter Status
import { getAll, post } from "../../../Services/Api"; //Api Service
import TableDropdown from "../../../Components/TableDropdown";
import withModal from "../../../Components/withModal"; //Higher Order Component
import { clubManagementData } from "../../../Config/Data";
import CustomButton from "../../../Components/CustomButton";
import { Link } from "react-router-dom";

const ClubManagement = () => {
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
    dateFilterTitle,
  } = UseTableControls();

  const [userData, setUserData] = useState([]);

  //Fetch Users Function
  const fetchUsers = useCallback(
    async (filter = "") => {
      try {
        setLoading(true);
        // const url = `/admin-api/users?page=${currentPage}&search=${searchValue}&per_page=${selectedEntries}${filter}`;
        const response = clubManagementData;
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
    <DashboardLayout pageTitle="Club Management">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-between my-4 gap-2">
              <h2 className="mainTitle mt-2">Club Management <span className="text-gray ps-2">(Coaches)</span></h2>
              <Link className="primaryBtn" to="/admin/club-management/create-club">Create Club</Link>
            </div>
            <div className="dashCard">
              <div className="row mb-3">
                <div className="col-12">
                  <CustomTable
                    loading={loading}
                    headers={clubHeaders}
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
                          <td>{item.uId}</td>
                          <td>{item.club_name}</td>
                          <td>{item.coach_name}</td>
                          <td>{item.email}</td>
                          <td>{item.date}</td>
                          <td
                            className={`${
                              item.status_detail == "Active"
                                ? "greenColor"
                                : "redColor"
                            }`}
                          >
                            {item.status_detail}
                          </td>
                          <td>
                            <TableDropdown
                              itemId={item.id}
                              linkPath="/admin/club-management"
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

export default withModal(ClubManagement); // Bind with HOC
