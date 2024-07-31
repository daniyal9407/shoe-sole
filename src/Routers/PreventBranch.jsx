import { Navigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

export default function PreventBranch() {
  const { role, token } = useAuth();
  if (token && role === "branch") {
    return <Navigate to="/branch/dashboard" />;
  } else {
    return <Navigate to="/branch" />;
  }
}
