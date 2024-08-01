import { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { DashboardLayout } from "../../../Components/AdminLayout/DashboardLayout";
import BackButton from "../../../Components/BackButton";
import { getDetails } from "../../../Services/Api";
import { images } from "../../../Assets";
import { clubManagementData, clubUserData } from "../../../Config/Data";
import CustomModal from "../../../Components/CustomModal";
import UseTableControls from "../../../Config/UseTableControls";
import CustomTable from "../../../Components/CustomTable";
import { clubUsersHeaders } from "../../../Config/TableHeaders";
import { generalStatus } from "../../../Config/TableStatus";
import { serialNumber } from "../../../Utils/helper";
import TableDropdown from "../../../Components/TableDropdown";

const ClubDetails = () => {
  const { id } = useParams();
  const [profileData, setProfileData] = useState({});
  const [activeModal, setActiveModal] = useState(false);
  const [activeModal2, setActiveModal2] = useState(false);
  const [inactiveModal, setInactiveModal] = useState(false);
  const [inactiveModal2, setInactiveModal2] = useState(false);

  const [userData, setUserData] = useState([]);

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

  //Fetch Users Function
  const fetchUsers = useCallback(
    async (filter = "") => {
      try {
        setLoading(true);
        // const url = `/admin-api/users?page=${currentPage}&search=${searchValue}&per_page=${selectedEntries}${filter}`;
        const response = clubUserData;
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

  useEffect(() => {
    const getUser = async () => {
      // const response = await getDetails(`/admin-api/users/${id}`);
      const response = clubManagementData?.detail?.data?.find(
        (item) => item.id === Number(id)
      );
      if (response) {
        setProfileData(response);
      }
    };
    getUser();
  }, [id]);
  //   console.log(profileData)

  const {
    file,
    club_name,
    coach_name,
    email,
    status_detail,
    profileStatus,
    uId,
    password,
    id: pId
  } = profileData;

  const actionMethod = () => {
    setActiveModal2(true);
    setActiveModal(false);
  };

  const actionMethod2 = () => {
    setInactiveModal2(true);
    setInactiveModal(false);
  };

  return (
    <DashboardLayout pageTitle="Club Details">
      <h2 className="mainTitle my-4">
        <BackButton />
        View Club Details
      </h2>
      <div className="dashCard mb-4">
        <h2 className="mb-4">{club_name}</h2>
        <div className="row mb-3">
          <div className="col-lg-6 order-2 order-lg-1 mb-3">
            <div className="profileImage">
              <img src={file?.file_url ?? images.placeholder} alt="User" />
            </div>
          </div>
          <div className="col-lg-6 text-lg-end order-1 order-lg-2 mb-3">
            <label className="fw-semibold">Profile Status :</label>
            <span
              className={`fw-semibold ms-1 ${
                status_detail == "Active" ? "Active" : "Inactive"
              }`}
            >
              {status_detail}
            </span>
            <div className="mt-2">
              {profileStatus ? (
                <button
                  className="primaryBtn"
                  onClick={() => setActiveModal(true)}
                >
                  Inactive User
                </button>
              ) : (
                <button
                  className="primaryBtn"
                  onClick={() => setInactiveModal(true)}
                >
                  Active User
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-xxl-6 col-xl-8 col-md-10">
            <div className="row mt-4">
              <div className="col-xxl-3 col-xl-4 col-md-6 mb-2">
                <h4 className="secondaryLabel text-secondary">Club Name:</h4>
                <p className="secondaryText fw-bold">{club_name}</p>
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-6 mb-2">
                <h4 className="secondaryLabel text-secondary">
                  Email Address:
                </h4>
                <p className="secondaryText fw-bold">{email}</p>
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-6 mb-2">
                <h4 className="secondaryLabel text-secondary">Unique ID:</h4>
                <p className="secondaryText fw-bold">{uId}</p>
              </div>
            </div>
            <div className="row mt-xl-4">
              <div className="col-xxl-3 col-xl-4 col-md-6 mb-2">
                <h4 className="secondaryLabel text-secondary">Password:</h4>
                <p className="secondaryText fw-bold">{password}</p>
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-6 mb-2">
                <h4 className="secondaryLabel text-secondary">Name Of Coach</h4>
                <p className="secondaryText fw-bold">{coach_name}</p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <Link
                  className="primaryBtn"
                  to={`/admin/club-management/edit-club/${pId}`}
                >
                  Edit Club
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h2 className="mt-3">Assigned Users</h2>
          <div className="col-12">
            <CustomTable
              loading={loading}
              headers={clubUsersHeaders}
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
                    <td>{item.club_name}</td>
                    <td>{item.date}</td>
                    <td>
                      <TableDropdown
                      // itemId={item.id}
                      // linkPath="/admin/club-management"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </CustomTable>
          </div>
        </div>
      </div>
      <CustomModal
        heading="Are You Sure You Want to Inactive This User?"
        para=""
        action={actionMethod}
        show={activeModal}
        close={() => setActiveModal(false)}
      />
      <CustomModal
        success
        heading="This User Has Been Inactivated Successfully!"
        para=""
        show={activeModal2}
        close={() => setActiveModal2(false)}
      />
      <CustomModal
        heading="Are You Sure You Want to Aactive This User?"
        para=""
        action={actionMethod2}
        show={inactiveModal}
        close={() => setInactiveModal(false)}
      />
      <CustomModal
        success
        heading="This User Has Been activated Successfully!"
        para=""
        show={inactiveModal2}
        close={() => setInactiveModal2(false)}
      />
    </DashboardLayout>
  );
};

export default ClubDetails;
