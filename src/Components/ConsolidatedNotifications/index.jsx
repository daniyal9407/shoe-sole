import { useState, useEffect } from "react";
import "./style.css"; // Ensure this path is correct
import { DashboardLayout } from "../AdminLayout/DashboardLayout";
import NotificationCard from "../NotificationCard";
import CustomPagination from "../CustomPagination";
import { getAll, post } from "../../Services/Api";
import UseTableControls from "../../Config/UseTableControls";
import { dateFormat, humanReadable } from "../../Utils/helper";
import { images } from "../../Assets";
import { Select } from "../Select";
import { notificationOptions } from "../../Config/TableStatus";
import LoadingSpinner from "../Loader";
import { notificationsData } from "../../Config/Data";

const ConsolidatedNotifications = ({ apiEndpoints }) => {
  const [notificationState, setNotificationState] = useState(
    notificationsData.detail.notifications.data
  );
  const [load, setLoad] = useState(false);
  const [markAll, setMarkAll] = useState(false);

  const {
    currentPage,
    setCurrentPage,
    totalRecords,
    setTotalRecords,
    totalPages,
    setTotalPages,
    selectedValue,
    setSelectedValue,
    selectedEntries,
    setSelectedEntries,
    showData,
    setShowData,
  } = UseTableControls();

  const getNotifications = async (filter = null) => {
    try {
      const responses = await Promise.all(
        apiEndpoints?.detail?.notifications?.data?.map(async (endpoint) => {
          let url = `${endpoint}?page=${currentPage}`;
          if (filter) url += filter;
          if (selectedEntries) url += `&per_page=${selectedEntries}`;
          if (selectedValue) url += `&status=${selectedValue}`;
          return await getAll(url);
        })
      );

      const combinedNotifications = responses.flatMap(
        (response) => response.detail.notifications.data
      );
      const totalNotifications = combinedNotifications.length;

      setNotificationState(combinedNotifications);
      setShowData(totalNotifications);
      setTotalRecords(totalNotifications);
      setTotalPages(Math.ceil(totalNotifications / selectedEntries));
    } catch (error) {
      console.error("Error fetching notifications:", error);
    } finally {
      setLoad(false); // Ensure load is set to false after handling notifications
    }
  };

  useEffect(() => {
    // getNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, selectedEntries, selectedValue]);

  // const handleClick = async (val) => {
  //   const responses = await Promise.all(
  //     apiEndpoints.map((endpoint) => post(`${endpoint}/${val}`))
  //   );

  //   // Check if any response is successful
  //   if (responses.some((response) => response)) {
  //     // getNotifications();
  //   }
  // };

  // for show status
  const handleStatusChange = (value) => {
    setSelectedValue(value);
  };

  const handleClick = () => {
    setMarkAll(!markAll);
  };

  return (
    <div>
      <DashboardLayout pageTitle="Notifications">
        <div className="dashCard">
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col-12">
                <h2 className="mainTitle">Notifications</h2>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex ">
                  <label className="fw-medium mt-1">Showing :</label>
                  <Select
                    className="notificationSelect"
                    value={selectedValue}
                    onChange={handleStatusChange}
                    label=""
                    labelclass="pe-2"
                  >
                    {notificationOptions}
                  </Select>
                  </div>
                  <div className="mt-3">
                    <button className="backToLogin bg-transparent border-0 text-decoration-underline" onClick={handleClick}>
                      {markAll ? "Mark All As Read" : "Mark All As Unread"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {load ? (
                <LoadingSpinner />
              ) : (
                <>
                  {notificationState?.slice(0, 5)?.map((notification) => (
                    <div className="col-12" key={notification.id}>
                      <NotificationCard
                        id={notification.id}
                        text={notification?.data?.body}
                        name={notification?.data?.title}
                        // image={images.}
                        date={dateFormat(notification?.created_at)}
                        time={humanReadable(notification?.created_at)}
                        read={notification?.read_at}
                        notiRead={notification?.read_at}
                        onClick={"handleClick"}
                        markAll={markAll}
                        setMarkAll={setMarkAll}
                      />
                    </div>
                  ))}
                </>
              )}
            </div>
            {/* <CustomPagination
              showingItem={showData}
              totalItems={totalRecords}
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            /> */}
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default ConsolidatedNotifications;
