import { Link } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import { generateLinks } from "../../../Utils/helper";
import { useAuth } from "../../../Hooks/useAuth";

export const Sidebar = (props) => {
  const [user, setUser] = useState({});
  const urlPath = window.location.pathname;
  const { role } = useAuth();
  useEffect(() => {
    setUser(role);
  }, []);

  let Links = generateLinks(role);

  return (
    <>
      <div className={`sidebar ${props.sideclassName}`} id="sidebar">
        <ul className="list-unstyled">
          {Links.map((element, index) => (
            <li className="sidebar-li" key={index}>
              <Link
                className={`sideLink ${urlPath.includes(element.link.substring()) ? "active" : ""
                  }`}
                to={element.link}
              >
                <span className="sideIcon">
                  <img src={element.image} alt="" />
                </span>
                <span className="sideLinkText">{element.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
