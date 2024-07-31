import { useState } from "react";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const CustomInput = (props) => {
  const [typePass, setTypePass] = useState(true);

  const togglePassType = () => {
    setTypePass(!typePass);
  };

  return (
    <>
      <div className="inputWrapper">
        {props?.label && (
          <label htmlFor={props?.id} className={props?.labelclass}>
            {props?.label}
            {props?.required ? <span className="text-danger">*</span> : ""}
          </label>
        )}
        {props?.type === "password" ? (
          <div className="passwordWrapper">
            <input
              {...props}
              type={typePass ? "password" : "text"}
              className={`${props.inputclass ? props.inputclass : ""}`}
            />
            <button
              type="button"
              className="eyeButton"
              onClick={togglePassType}
            >
              <FontAwesomeIcon icon={typePass ? faEyeSlash : faEye} />
            </button>
          </div>
        ) : props?.type === "textarea" ? (
          <textarea
            placeholder={props?.placeholder}
            required={props?.required}
            id={props?.id}
            name={props?.name}
            rows={props?.rows}
            cols={props?.cols}
            className={props?.inputclass}
            onChange={props?.onChange}
            value={props?.value}
          />
        ) : (
          <input
            {...props}
            className={`${props.inputclass ? props.inputclass : ""}`}
          />
        )}
        {props?.error && (
          <div className="error-message red-text">{props?.error}</div>
        )}
      </div>
    </>
  );
};
export default CustomInput;
