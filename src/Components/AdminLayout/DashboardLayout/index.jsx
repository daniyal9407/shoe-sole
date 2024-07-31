import { React, useState, useEffect } from "react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import "./style.css";
import { usePageTitle } from "../../../Utils/helper";

export const DashboardLayout = (props) => {
  usePageTitle(props?.pageTitle ?? "");
  const [sideBarClass, setsideBarClass] = useState("");
  const [bodyClass, setbodyClass] = useState("");
  useEffect(() => {
    if (window.innerWidth <= 991) {
      setsideBarClass("collapsed");
      setbodyClass("expanded");
    } else {
      setsideBarClass("");
      setbodyClass("");
    }
    function handleResize() {
      if (window.innerWidth <= 991) {
        setsideBarClass("collapsed");
        setbodyClass("expanded");
      } else {
        setsideBarClass("");
        setbodyClass("");
      }
    }
    window.addEventListener("resize", handleResize);
  }, []);
  function sidebarToggle() {
    if (sideBarClass === "") {
      setsideBarClass("collapsed");
      setbodyClass("expanded");
    } else {
      setsideBarClass("");
      setbodyClass("");
    }
  }
  return (
    <>
      <Header sidebarToggle={sidebarToggle} />
      <Sidebar sideclassName={sideBarClass} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <div className={`dashboardBody ${bodyClass}`}>{props.children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
