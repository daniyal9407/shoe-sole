import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { dateFormat, humanReadable } from "../../Utils/helper";

const HeaderNotification = ({ notificationData, readAt}) => {

  const [notiRead, setNotiRead] = useState(readAt);
  const { role } = useAuth();
  // console.log(notiRead)

  // const handleDropdownToggle = (e) => {
  //   e.preventDefault(); // Prevent default behavior to avoid unnecessary page reloads or navigation
  //   getNotification(); // Call getNotification function when dropdown is toggled
  // };

  return (
    <Dropdown className={`notiDropdown me-2`}>
      <Dropdown.Toggle variant="transparent" className="notButton">
        <FontAwesomeIcon className="bellIcon" icon={faBell} />
        <span className="badge">9+</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="notiMenu" align="end">
        <div className={`notificationsBody`}>
          {notificationData.slice(0, 5).map((notification) => (
            //change Link Tag to div
            <div
              className={`singleNoti ${notiRead ? "bg-l-red" : "bg-light"}`}
              // to={`/${role}/notifications`}
              key={notification.id} // Use a unique key here
            >
              <div className="singleNotiIcon">
                <FontAwesomeIcon className="notiIcon" icon={faBell}/>
              </div>
              <div className="singleNotiContent">
                <h5 className="notiHeading">{notification?.data?.title}</h5>
                <p className="notiText fw-semibold">
                  {notification?.data?.body}
                </p>
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
                  onClick={()=>setNotiRead(!notiRead)}
                >
                 {notiRead ? "Mark as read" : "Mark as unread"}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="notiFooter">
          <Link to={`/${role}/notifications`}>Click To View</Link>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

HeaderNotification.propTypes = {
  notificationData: PropTypes.array.isRequired,
  getNotification: PropTypes.func.isRequired,
};

export default HeaderNotification;
