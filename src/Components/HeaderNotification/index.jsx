import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { dateFormat, humanReadable } from "../../Utils/helper";

const HeaderNotification = ({ notification }) => {
  const [notiRead, setNotiRead] = useState(notification.read_at);

  // const handleDropdownToggle = (e) => {
  //   e.preventDefault(); // Prevent default behavior to avoid unnecessary page reloads or navigation
  //   getNotification(); // Call getNotification function when dropdown is toggled
  // };

  return (
    //change Link Tag to div
    <div
      className={`singleNoti ${notiRead ? "bg-light" : "bg-l-red"}`}
      // to={`/${role}/notifications`}
      key={notification.id} // Use a unique key here
    >
      <div className="singleNotiIcon">
        <FontAwesomeIcon className="notiIcon" icon={faBell} />
      </div>
      <div className="singleNotiContent">
        <h5 className="notiHeading">{notification?.data?.title}</h5>
        <p className="notiText fw-semibold">{notification?.data?.body}</p>
        <p className="notiDateTime d-flex justify-content-between">
          <span className="fw-semibold">
            Time : {humanReadable(notification?.created_at)}
          </span>
          <span className="fw-semibold">
            {" "}
            Date : {dateFormat(notification?.created_at)}{" "}
          </span>
        </p>
        <button
          className={`notButton text-decoration-underline fw-semibold fs-12`}
          onClick={() => setNotiRead(!notiRead)}
        >
          {notiRead ? "Mark as read" : "Mark as unread"}
        </button>
      </div>
    </div>
  );
};

HeaderNotification.propTypes = {
  notificationData: PropTypes.array.isRequired,
  getNotification: PropTypes.func.isRequired,
};

export default HeaderNotification;
