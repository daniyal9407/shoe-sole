import { useDispatch } from "react-redux";
import { buildFormData } from "../Utils/helper";
import {
  setData,
  setRoles,
  setToken,
  logout as logoutAction,
} from "../Store/actions";
import axios from "axios";
import { logout } from "./Api";

export const useLogin = () => {
  const dispatch = useDispatch();
  const login = async (route, params = {}) => {
    try {
      const getRole = route.split("/")[1];
      const fd = new FormData();
      buildFormData(fd, params);
      const {
        data: {
          detail: { token, role },
          status,
        },
      } = await axios.post(route, fd);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const {
        data: { detail: user },
      } = await axios.get(`/${getRole}/account`);
      dispatch(setToken(token));
      dispatch(setRoles(role));
      dispatch(setData(user));
      return status;
    } catch (error) {
      console.log(error, "error");
      return error.response.data;
    }
  };

  return login;
};

export const useLogout = () => {
  const dispatch = useDispatch();
  const handleLogout = async (role) => {
    try {
      //uncomment when use backend api
      // await logout(`/${role}-api/auth/logout`);
      setTimeout(() => {
        localStorage.clear();
        dispatch(logoutAction());
        dispatch(setToken());
        dispatch(setRoles());
        dispatch(setData());
      }, 1000);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return handleLogout;
};
