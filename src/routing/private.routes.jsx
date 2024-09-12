import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component }) => {
  let is_logged_in = false;
  return is_logged_in ? component : <Navigate to={"/login"} />;
};

export const AdminPrivateRoute = ({ component }) => {
  let is_logged_in = false;
  let role = "admin";
  return is_logged_in && role === "admin" ? (
    component
  ) : (
    <Navigate to={"/login"} />
  );
};
