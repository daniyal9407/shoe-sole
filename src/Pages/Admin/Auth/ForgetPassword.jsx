import StepOne from "../../../Components/ForgetPasswordComponents/StepOne.jsx";
const ForgetPassword = () => {
  return (
    <StepOne
      apiEndpoint="/admin-api/password-recovery/verify-email"
      navigateTo="/admin/forget-password2"
    />
  );
};

export default ForgetPassword;
