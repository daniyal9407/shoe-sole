import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleUp,
  faArrowCircleDown,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import { images } from "../../Assets";

const StatsCard = (props) => {
  console.log(props.item)
  return (
    <>
      <div className="statsCard px-xl-3">
        <div className="statsContent">
          <div className="statsImg">
            <img src={props.item.image} alt="Card Icon" />
          </div>
          <div className="statsData">
            <div className="d-flex gap-2 align-items-center">
              <h3 className="statsNumber font-family-main mb-1">{props.item.number}</h3><span>{props.item.increase ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}</span>
            </div>
              <p className="statsText p-0 mb-0">{props.item.text}</p>
          </div>
          <div className="graphImg">
          <img src={images.statsGraph} alt="" className="img-fluid"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsCard;
