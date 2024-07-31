import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

const GuestRoutes = (props) => {
  const isAdmin = props.admin;
  const { role, token } = useAuth();
  if (token) {
    if (isAdmin || role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/admin/login" />;
    }
  } else {
    return <Outlet />;
  }
};

export default GuestRoutes;
