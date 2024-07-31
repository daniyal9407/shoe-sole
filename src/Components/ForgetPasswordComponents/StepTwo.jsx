import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.css";
import { Formik } from "formik";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import { AuthLayout } from "../AdminLayout/Auth";
import { getEmail, setCode, usePageTitle } from "../../Utils/helper";
import { forgotCode } from "../../Config/Validations";
import Toast, { showToast } from "../Toast";
import { post } from "../../Services/Api";
import { useFormStatus } from "../../Hooks/useFormStatus";

const StepTwo = ({ apiEndpoint, resendEndpoint, navigateTo }) => {
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);
    const [data, setForgotPasswordData] = useState({});
    const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus(); // use your custom hook
    usePageTitle("Forgot Password");
    const handleSubmit = async (values) => {
        startSubmitting();
        setCode(values);
        let email = getEmail();
        values.email = email.email;
        let response = await post(apiEndpoint, values);
        if (response.status) {
            showToast(response.message, "success");
            setTimeout(() => {
                navigate(navigateTo);
            }, 1000);
        } else {
            stopSubmitting();
            showToast(response.message, "error");
        }
        stopSubmitting();
    };

    const resendCode = async (e) => {
        e.preventDefault();
        setLoad(true);
        let email = getEmail();
        data.email = email.email;
        let response = await post(resendEndpoint, data);
        if (response.status) {
            showToast(response.message, "success");
            setLoad(false);
        } else {
            setLoad(false);
            showToast(response.message, "error");
        }
    };

    return (
        <AuthLayout
            authTitle="Forgot Password"
            authPara="An email has been sent to you with a verification code."
            backOption={true}
            authMain
        >
            <Formik
                initialValues={{ code: "" }}
                validationSchema={forgotCode}
                onSubmit={handleSubmit}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="mt-4">
                        <Toast />
                        <CustomInput
                            label="Verification Code"
                            id="code"
                            type="number"
                            required
                            placeholder="Enter Verification Code"
                            labelclass="mainLabel"
                            inputclass="mainInput mainInputLogIn"
                            value={values.code}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.code && errors.code}
                        />
                        <div className="d-flex align-items-baseline justify-content-end mt-1">
                            <button
                                type="button"
                                className="backToLogin notButton text-decoration-underline"
                                onClick={resendCode}
                            >
                                {load ? 'Sending...' : 'Resend Code'}
                            </button>
                        </div>
                        <div className="mt-4 text-center">
                            <CustomButton
                                type="submit"
                                className="primaryBtn w-100"
                                text="Continue"
                                isPending={isSubmitting}
                                pendingText="Loading..."
                            />
                        </div>
                    </form>
                )}
            </Formik>
        </AuthLayout>
    );
};

StepTwo.propTypes = {
    apiEndpoint: PropTypes.string.isRequired,
    resendEndpoint: PropTypes.string.isRequired,
    navigateTo: PropTypes.string.isRequired,
};

export default StepTwo;
