import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEllipsisV,
  faSignOut,
  faBars,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { images } from "../../../Assets";
import CustomModal from "../../CustomModal";
import { getAll } from "../../../Services/Api";
import { useLogout } from "../../../Services/Auth";
import HeaderNotification from "../../HeaderNotification";
import Toast, { showToast } from "../../Toast";
import { useAuth } from "../../../Hooks/useAuth";
import { notificationsData } from "../../../Config/Data";

export const Header = (props) => {
  const navigate = useNavigate();
  const { role, user } = useAuth();
  const handleLogout = useLogout();
  const [showModal, setShowModal] = useState(false);
  const [notificationData, setNotificationData] = useState([]);

  const getNotification = async () => {
    // let url = `/${role}-api/notifications`;
    // const response = await getAll(url);
    const response = notificationsData;

    if (response) {
      setNotificationData(response?.detail?.notifications?.data);
    }
  };

  const readAtValues = notificationData?.detail?.notifications?.data.map(
    (notification) => notification.read_at
  );

  console.log(readAtValues); // Output: [true, false]

  useEffect(() => {
    getNotification();
  }, []);

  const logout = async () => {
    showToast("Logout Successfully", "success");
    await handleLogout(role);
    setTimeout(() => {
      navigate(`/${role}`);
    }, 1000);
  };

  return (
    <header>
      <Navbar className="customHeader" expand="md">
        <Container fluid>
          <Link to={"/admin/dashboard"} className="siteLogo order-2 order-lg-1">
            <img src={images.adminLogo} alt="" />
          </Link>
          <Navbar.Toggle className="order-4 order-lg-2 notButton">
            <FontAwesomeIcon className="bell-icon" icon={faEllipsisV} />
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="customCollapse order-3"
          >
            <Nav className="ms-auto">
              <HeaderNotification notificationData={notificationData} readAt={readAtValues}/>
              <Dropdown className="userDropdown">
                <Dropdown.Toggle
                  variant="transparent"
                  className="notButton toggleButton"
                >
                  <div className="userImage gap-2 d-flex justify-content-between align-items-center">
                    <img
                      src={user?.file?.file_url}
                      alt=""
                      className="img-fluid"
                    />
                    <p className="ms-2 mb-0">{user?.name}</p>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="userMenu" align="end">
                  <Link className="userMenuItem" to={`/${role}/profile`}>
                    <FontAwesomeIcon
                      className="me-2 yellow-text"
                      icon={faUser}
                    />{" "}
                    Profile
                  </Link>
                  <Link
                    onClick={() => setShowModal(true)}
                    className="userMenuItem"
                  >
                    <FontAwesomeIcon
                      className="me-1 yellow-text"
                      icon={faSignOut}
                    />{" "}
                    Logout
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
          <button className="notButton ms-md-2 order-lg-4 order-md-4 order-1 d-lg-none d-block">
            <FontAwesomeIcon
              className="bell-icon"
              onClick={props.sidebarToggle}
              icon={faBars}
            />
          </button>
        </Container>
      </Navbar>
      <Toast />
      <CustomModal
        show={showModal}
        close={() => {
          setShowModal(false);
        }}
        action={() => {
          logout();
          setShowModal(false);
        }}
        heading="Are you sure you want to logout?"
      />
    </header>
  );
};
