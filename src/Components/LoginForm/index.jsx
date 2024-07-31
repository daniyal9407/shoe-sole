import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import "./style.css";
import CustomInput from "../CustomInput/index.jsx";
import CustomButton from "../CustomButton/index.jsx";
import Toast, { showToast } from "../Toast/index.jsx";
import { useLogin } from "../../Services/Auth.jsx";
import { useFormStatus } from "../../Hooks/useFormStatus.jsx";
// import { loginCredenctials } from "../../Config/Data.jsx";
import { loginCredenctials, userDetail } from "../../Config/Data.jsx";
import { setData, setRoles, setToken } from "../../Store/actions.jsx";
import { useDispatch } from "react-redux";

const LoginForm = ({
  actor,
  apiEndpoint,
  validationSchema,
  additionalField,
}) => {
  const navigate = useNavigate();
  const login = useLogin();
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus(); // use your custom hook
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    startSubmitting();
    let currentUser;
    currentUser =
      loginCredenctials.email == values.email &&
      loginCredenctials.password == values.password
        ? (currentUser = loginCredenctials)
        : (currentUser = false);

    // let response = await login(apiEndpoint, values);
    if (currentUser.status === true) {
      //remove all redux when using backend APIs
      dispatch(setToken(currentUser.token));
      dispatch(setRoles(currentUser.role));
      dispatch(setData(userDetail.detail));
      showToast("Login Successfully", "success");
      setTimeout(() => {
        navigate(`/${actor}/dashboard`);
      }, 1000);
    } else {
      showToast(currentUser.message, "error");
    }
    stopSubmitting();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        ...additionalField,
      }}
      validationSchema={validationSchema}
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
        <form className="mt-3" onSubmit={handleSubmit}>
          <Toast />
          <CustomInput
            label="Email Address"
            id="email"
            type="email"
            required
            placeholder="Enter Your Email Address"
            labelclass="mainLabel"
            inputclass="mainInput mainInputLogIn"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email}
          />
          <CustomInput
            label="Password"
            id="password"
            required
            type="password"
            placeholder="Enter Password"
            labelclass="mainLabel"
            inputclass="mainInput mainInputLogIn"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && errors.password}
          />
          <div className="d-flex flex-wrap gap-3 align-items-baseline justify-content-between mt-1">
            {/* <div className="checkBox">
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              className="me-1"
            />
            <label htmlFor="rememberMe" className="mainLabel1 ps-0">
              Remember Me
            </label>
          </div> */}
            <div className="toggle-container">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                className="toggle-checkbox"
              />
              <label htmlFor="rememberMe" className="toggle-label">
                <span className="toggle-slider"></span>
              </label>
              <label htmlFor="rememberMe" className="toggle-text">Remember Me</label>
            </div>
            <Link
              to={`/${actor}/forget-password`}
              className="backToLogin text-decoration-underline"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="mt-4">
            <CustomButton
              variant="primaryBtn"
              className="px-5 w-100"
              text="Log In"
              pendingText="Loading..."
              isPending={isSubmitting}
              type="submit"
            />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
