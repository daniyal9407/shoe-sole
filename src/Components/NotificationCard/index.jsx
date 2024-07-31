import { React, useState } from "react";
import CustomButton from "../CustomButton";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const NotificationCard = (props) => {
  const [notiRead, setNotiRead] = useState(props.read)

  const handleClick = () => {
    props.onClick(props?.id); // Call the parent component's handleClick with the notification ID
  };

  return (
    <div
      // className={`notificationWrapper ${props.read === null ? "unread" : ""}`}
      className={`notificationWrapper ${notiRead || props?.markAll ? 'unread' : '' }`}
    >
      <div
        className={`d-sm-flex justify-content-between align-items-center gap-3 `}
        key={props.id}
      >
        <div className="d-flex gap-3 align-items-center">
          <div className={`notificationImageIcon ${notiRead || props?.markAll ? 'readNoti' : 'unreadNoti' }`}>
            {/* <img src={props?.image} alt="Icon" /> */}
            <FontAwesomeIcon icon={faBell} className="notiBell"/>
          </div>
          <div className="flex-grow-1">
            <div className="d-flex gap-3">
              <h5 className="notificationHeading">{props?.name}</h5>
              {/* <p className="notificationText ps-0">{props?.text}</p> */}
            </div>
            <div className="dateTime">
              <p className="p-sm l-grey-text mb-0">{props?.date}</p>
              <span className="mx-2">|</span>
              <p className="p-sm l-grey-text mb-0">{props?.time}</p>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 text-end">
          <div className="flex-shrink-0 text-sm-end mt-3 mt-sm-0">
            <CustomButton
              onClick={() => setNotiRead(!notiRead)}
              variant={
                notiRead || props?.markAll
                  ? "primaryBtn"
                  : "secondaryBtn"
              }
              text={
                notiRead || props?.markAll ? "Mark as Read" : "Mark as Unread"
              }
            />
          </div>
          {/* <CustomButton
            onClick={handleClick}
            className="primaryBtn"
            text={props.read === null ? "Mark as Read" : ""}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
