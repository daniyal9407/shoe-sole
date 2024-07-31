import { Navigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

export default function PreventRestaurant() {
  const { role, token } = useAuth();
  if (token && role === "restaurant") {
    return <Navigate to="/restaurant/dashboard" />;
  } else {
    return <Navigate to="/restaurant" />;
  }
}
