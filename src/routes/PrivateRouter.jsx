import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, children }) => {
  console.log(isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
