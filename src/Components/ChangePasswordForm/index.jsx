import React from "react";
import { Formik } from "formik";
import { changePassword } from "../../Config/Validations";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";

const ChangePasswordForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        current_password: "",
        password: "",
        password_confirmation: "",
      }}
      validationSchema={changePassword}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} className="pCPass">
          <div className="row mb-3">
            <div className="col-md-12">
              <CustomInput
                label="Current Password"
                labelclass="mainLabel"
                required
                type="password"
                placeholder="Enter Current Password"
                inputclass="mainInput"
                id="current_password"
                value={values.current_password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.current_password && errors.current_password}
              />
            </div>
            <div className="col-md-12">
              <CustomInput
                label="New Password"
                labelclass="mainLabel"
                type="password"
                required
                placeholder="Enter New Password"
                inputclass="mainInput"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && errors.password}
              />
            </div>
            <div className="col-md-12">
              <CustomInput
                label="Confirm New Password"
                labelclass="mainLabel"
                type="password"
                required
                placeholder="Confirm Password"
                inputclass="mainInput"
                id="password_confirmation"
                value={values.password_confirmation}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.password_confirmation && errors.password_confirmation
                }
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-12">
              <CustomButton
                type="submit"
                variant="primaryBtn"
                className="px-5"
                text="Update"
              />
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ChangePasswordForm;
