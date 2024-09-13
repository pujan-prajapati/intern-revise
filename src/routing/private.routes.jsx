import { Navigate } from "react-router-dom";
import { getLocalStorage } from "../utilities/helpers";

export const PrivateRoute = ({ component }) => {
  let token = localStorage.getItem("intern_token") ?? "";
  let user = JSON.parse(localStorage.getItem("intern_user")) ?? {};
  let is_logged_in = false;
  return is_logged_in ? component : <Navigate to={"/login"} />;
};

export const AdminPrivateRoute = ({ component }) => {
  let token = getLocalStorage("intern_token");
  let is_logged_in = token ? true : false;

  let local_user = getLocalStorage("intern_user");

  let role = local_user["role"].toLowerCase() ?? null;
  return is_logged_in && role === "admin" ? (
    component
  ) : (
    <Navigate to={"/login"} />
  );
};
