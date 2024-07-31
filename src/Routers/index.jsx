import { Outlet, Route, Routes } from "react-router-dom";

/* Admin Routes */

import { Dashboard } from "../Pages/Admin/Dashboard";
import ForgetPassword from "../Pages/Admin/Auth/ForgetPassword";
import ForgetPassword2 from "../Pages/Admin/Auth/ForgetPassword2";
import ForgetPassword3 from "../Pages/Admin/Auth/ForgetPassword3";
import AdminLogin from "../Pages/Admin/Auth/Login";
import GuestRoutes from "./GuestRoutes";
import PreventAdmin from "./PreventAdmin";
import ProtectedRoutes from "./ProtectedRoutes";
import Profile from "../Pages/Admin/Profile";
import EditProfile from "../Pages/Admin/Profile/EditProfile";
import ChangePassword from "../Pages/Admin/Profile/ChangePassword";
import UserManagement from "../Pages/Admin/UserManagement";
import UserDetails from "../Pages/Admin/UserManagement/UserDetails";
import NotificationsAdmin from "../Pages/Admin/Notifications";
import QueryManagement from "../Pages/Admin/QueryManagement";
import QueryDetails from "../Pages/Admin/QueryManagement/details";
import ClubManagement from "../Pages/Admin/ClubManagement";
import ClubDetails from "../Pages/Admin/ClubManagement/deatils";
import CreateClub from "../Pages/Admin/ClubManagement/create";
import EditClub from "../Pages/Admin/ClubManagement/edit";

const Routers = () => {
  const roles = {
    admin: "admin",
    branch: "branch",
    restaurant: "restaurant",
  };

  return (
    <Routes>
      {/* Admin Guest Routes */}
      <Route element={<GuestRoutes admin />}>
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/forget-password" element={<ForgetPassword />} />
        <Route path="/admin/forget-password2" element={<ForgetPassword2 />} />
        <Route path="/admin/forget-password3" element={<ForgetPassword3 />} />
        <Route path="/admin/*" element={<PreventAdmin />} />
      </Route>

      {/* Admin Protected Routes */}
      <Route element={<ProtectedRoutes admin roles={[roles.admin]} />}>
        <Route path="/admin/*" element={<PreventAdmin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/admin/edit-profile" element={<EditProfile />} />
        <Route path="/admin/change-password" element={<ChangePassword />} />
        <Route path="/admin/user-management" element={<UserManagement />} />
        <Route path="/admin/user-management/:id" element={<UserDetails />} />
        <Route path="/admin/club-management" element={<ClubManagement />} />
        <Route path="/admin/club-management/:id" element={<ClubDetails />} />
        <Route path="/admin/club-management/create-club" element={<CreateClub />} />
        <Route path="/admin/club-management/edit-club/:id" element={<EditClub />} />
        <Route path="/admin/query-management" element={<QueryManagement />} />
        <Route path="/admin/query-management/:id" element={<QueryDetails />} />
        <Route path="/admin/notifications" element={<NotificationsAdmin />} />
      </Route>
    </Routes>
  );
};
export default Routers;
