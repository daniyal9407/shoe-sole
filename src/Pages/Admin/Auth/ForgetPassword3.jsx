import StepThree from "../../../Components/ForgetPasswordComponents/StepThree";
const ForgetPassword3 = () => {
  return (
    <StepThree
      apiEndpoint="/admin-api/password-recovery/update-password"
      navigateTo="/admin"
    />
  );
};

export default ForgetPassword3;
