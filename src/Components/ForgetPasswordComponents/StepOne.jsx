import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.css";
import { Formik } from "formik";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import { AuthLayout } from "../AdminLayout/Auth";
import { forgotEmail } from "../../Config/Validations";
import Toast, { showToast } from "../Toast";
import { setEmail, usePageTitle } from "../../Utils/helper";
import { post } from "../../Services/Api";
import { useFormStatus } from "../../Hooks/useFormStatus";

const StepOne = ({ apiEndpoint, navigateTo }) => {
    const navigate = useNavigate();
    const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus(); // use your custom hook
    usePageTitle("Forgot Password");
    const handleSubmit = async (values) => {
        navigate('/admin/forget-password2') // remove when use api
        startSubmitting();
        setEmail(values);
        // let response = await post(apiEndpoint, values); uncomment when use backend api
        if (response.status) {
            showToast(response.message, "success");
            setTimeout(() => {
                navigate(navigateTo);
            }, 1000);
        } else {
            stopSubmitting();
            showToast(response?.errors?.email[0], "error")
        }
        stopSubmitting();
    };

    return (
        <AuthLayout
            authTitle="Forgot Password"
            authPara="Enter your email address to receive a verification code"
            backOption={true}
            authMain
        >
            <Formik
                initialValues={{ email: "" }}
                validationSchema={forgotEmail}
                onSubmit={handleSubmit}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="mt-4">
                        <Toast />
                        <CustomInput
                            label="Email Address"
                            id="email"
                            type="email"
                            required
                            placeholder="Enter Email Address"
                            labelclass="mainLabel"
                            inputclass="mainInput mainInputLogIn"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.email && errors.email}
                        />
                        <div className="mt-4 text-center">
                            <CustomButton
                                type="submit"
                                className="primaryBtn px-5"
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

StepOne.propTypes = {
    apiEndpoint: PropTypes.string.isRequired,
    navigateTo: PropTypes.string.isRequired,
};

export default StepOne;
