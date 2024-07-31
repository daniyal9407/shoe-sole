import StepTwo from "../../../Components/ForgetPasswordComponents/StepTwo";
const ForgetPassword2 = () => {
  return (
    <StepTwo
      apiEndpoint="/admin-api/password-recovery/verify-code"
      resendEndpoint="/admin-api/password-recovery/verify-email"
      navigateTo="/admin/forget-password3"
    />
  );
};

export default ForgetPassword2;
