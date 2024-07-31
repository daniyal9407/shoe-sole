import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import CustomButton from "../CustomButton";

import { images } from "../../Assets";
import "./style.css";
import { useState } from "react";
import CustomInput from "../CustomInput";

const CustomModal = (props) => {
  return (
    <>
      <Modal show={props?.show} centered onHide={props?.close}>
        <button className="closeButton" onClick={props?.close}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <Modal.Body className="text-center">
          {props?.success ? (
            <img src={images.Check} alt="check" className="modalImage" />
          ) : props?.showReason ? (
            ""
          ) : (
            <img src={images.Question} alt="question" className="modalImage" />
          )}
          <div className="modalContent">
            <h2 className="modalHeading">{props?.heading}</h2>
            <p className="modalpara">{props?.para}</p>
            {props?.showReason && (
              <div className="modalReason my-3 text-start">
                <label className="mainLabel">{props?.label1}</label>
                <textarea
                  className="mainInput"
                  placeholder={props?.place1}
                  rows="4"
                  onChange={props?.onChange}
                  value={props?.value}
                ></textarea>
              </div>
            )}
            {props?.success ? (
              <CustomButton
                onClick={props?.close}
                className="primaryBtn px-5"
                text="Ok"
              />
            ) : props?.showReason ? (
              <>
                <CustomButton
                  onClick={props?.showReason}
                  variant="primaryBtn"
                  text={props?.btnText}
                />
                <CustomButton
                  onClick={props?.close}
                  variant="secondaryBtn ms-2 px-5"
                  text="No"
                />
              </>
            ) : props?.alert ? (
              <>
                <CustomButton
                  onClick={props?.close}
                  className="primaryBtn px-5"
                  text="Ok"
                />
              </>
            ) : (
              <>
                <CustomButton
                  onClick={props?.action}
                  variant="primaryBtn px-5"
                  text="Yes"
                  className="me-2"
                />
                <CustomButton
                  onClick={props?.close}
                  variant="secondaryBtn px-5"
                  text="No"
                />
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomModal;
