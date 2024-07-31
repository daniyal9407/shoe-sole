import { AuthLayout } from "../../../Components/AdminLayout/Auth";
import "./style.css";
import { usePageTitle } from "../../../Utils/helper";
import { loginValidationSchema } from "../../../Config/Validations.jsx";
import LoginForm from "../../../Components/LoginForm/index.jsx";

const AdminLogin = () => {
  usePageTitle("Admin Login");
  return (
    <>
      <AuthLayout authTitle="Admin Login" authPara="">
        <LoginForm
          actor="admin"
          apiEndpoint="/admin-api/auth/login"
          validationSchema={loginValidationSchema}
        />
      </AuthLayout>
    </>
  );
};

export default AdminLogin;
