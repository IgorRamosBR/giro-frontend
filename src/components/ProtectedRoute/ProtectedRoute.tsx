import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) return <h2>Loading...</h2>;

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
