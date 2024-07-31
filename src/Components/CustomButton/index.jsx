import React from "react";
import "./style.css";

const CustomButton = (props) => {
  return (
    <>
      {/* <button
        className={`${props?.variant} ${props?.className}`}
        type={props?.type}
        onClick={props?.onClick}
      >
        {props?.text}
      </button> */}

      <button
        className={`${props?.variant} ${props?.className}`}
        type={props?.type}
        onClick={props?.onClick}
        disabled={props?.isPending}
      >
        {props?.isPending ? props?.pendingText : props?.text}
      </button>
    </>
  );
};
export default CustomButton;
