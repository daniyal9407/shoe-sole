import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.css";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import CustomModal from "../CustomModal";
import { AuthLayout } from "../AdminLayout/Auth";
import { getCode, getEmail, usePageTitle } from "../../Utils/helper";
import { post } from "../../Services/Api";
import { Formik } from "formik";
import { forgotPassword } from "../../Config/Validations";
import Toast, { showToast } from "../Toast";
import { useFormStatus } from "../../Hooks/useFormStatus";

const StepThree = ({ apiEndpoint, navigateTo }) => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [load, setLoad] = useState(false);
    const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus(); // use your custom hook


    usePageTitle("Forgot Password");

    const handleSubmit = async (values) => {
        startSubmitting();
        let email = getEmail();
        let code = getCode();
        values.code = code.code;
        values.email = email.email;
        let response = await post(apiEndpoint, values);
        if (response.status) {
            setLoad(false);
            showToast(response.message, "success");
            setShowModal(true);
        } else {
            stopSubmitting();
            setLoad(false);
            showToast(response.message, "error");
        }
        stopSubmitting();
    };

    const PageChange = () => {
        navigate(navigateTo);
    };

    return (
        <>
            <AuthLayout
                authTitle="Forgot Password"
                authPara="Set New Password for your Account"
                backOption={true}
                authMain
            >
                <Formik
                    initialValues={{
                        password: "",
                        password_confirmation: "",
                    }}
                    validationSchema={forgotPassword}
                    onSubmit={handleSubmit}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    }) => (
                        <form onSubmit={handleSubmit} className="mt-4">
                            <Toast />
                            <CustomInput
                                label="Password"
                                id="password"
                                type="password"
                                required
                                placeholder="Enter Password"
                                labelclass="mainLabel"
                                inputclass="mainInput mainInputLogIn"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.password && errors.password}
                            />

                            <CustomInput
                                label="Confirm Password"
                                id="password_confirmation"
                                type="password"
                                required
                                placeholder="Enter Confirm Password"
                                labelclass="mainLabel"
                                inputclass="mainInput mainInputLogIn"
                                value={values.password_confirmation}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={
                                    touched.password_confirmation && errors.password_confirmation
                                }
                            />
                            <div className="mt-4 text-center">
                                <CustomButton
                                    type="submit"
                                    className="primaryBtn w-100"
                                    text="Update"
                                    isPending={isSubmitting}
                                    pendingText="Loading..."
                                />
                            </div>
                        </form>
                    )}
                </Formik>
            </AuthLayout>

            <CustomModal
                show={showModal}
                close={PageChange}
                success
                heading="Your password has been reset. Please login to continue."
                para=""
            />
        </>
    );
};

StepThree.propTypes = {
    apiEndpoint: PropTypes.string.isRequired,
    navigateTo: PropTypes.string.isRequired,
};

export default StepThree;
