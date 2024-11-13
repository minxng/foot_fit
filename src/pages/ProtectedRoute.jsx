import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user, loading } = useAuthContext();
  if (loading) {
    return null;
  }
  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }
  return children;
}
