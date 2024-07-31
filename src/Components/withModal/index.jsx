// withModal.js
import React, { useState } from "react";
import CustomModal from "../CustomModal";

const withModal = (WrappedComponent) => {
    return (props) => {
        const [modalState, setModalState] = useState({
            show: false,
            success: false,
            heading: "",
            action: null,
        });

        const showModal = (heading, action, success = false) => {
            setModalState({ show: true, success, heading, action });
        };

        const closeModal = () => {
            setModalState({ ...modalState, show: false });
        };

        return (
            <>
                <WrappedComponent {...props} showModal={showModal} />
                <CustomModal
                    show={modalState.show}
                    close={closeModal}
                    action={modalState.action}
                    heading={modalState.heading}
                    success={modalState.success}
                />
            </>
        );
    };
};

export default withModal;
