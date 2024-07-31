import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

const ProtectedRoutes = (props) => {
  const { role, token } = useAuth();

  if (token) {
    if (props?.roles?.includes(role)) {
      return <Outlet />;
    } else {
      return <Navigate to={role + "/dashboard"} />;
    }
  } else if (props?.admin) {
    return <Navigate to="/admin/" />;
  } else if (props?.branch) {
    return <Navigate to="/branch/" />;
  } else if (props?.restaurant) {
    return <Navigate to="/restaurant/" />;
  } else {
    return <Navigate to="/admin/login" />;
  }
};

export default ProtectedRoutes;
