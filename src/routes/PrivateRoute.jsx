import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { currentUser } = UserAuth();

  return currentUser ? children : <Navigate to="/" replace={true} />;
};
