import React from "react";
import { Link } from "react-router-dom";

function NavLinks(props) {
  return (
    <li className="sidebar-li">
      <Link className="sideLink" to={props.data.link}>
        <span className="sideIcon">
          <img src={props.data.image} alt="" />
        </span>
        <span className="sideLinkText">{props.data.name}</span>
      </Link>
    </li>
  );
}

export default NavLinks;
