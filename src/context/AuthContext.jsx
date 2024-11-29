import { createContext, useContext, useEffect, useState } from "react";
import { checkAuthState } from "../api/firebase";
import { login, logout } from "../api/firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [authState, setAuthState] = useState({ user: null, loading: true });
  const user = authState.user;
  const loading = authState.loading;
  useEffect(() => {
    checkAuthState((user) => {
      if (user) {
        setAuthState({ user, loading: false });
      } else {
        setAuthState({ user: null, loading: false });
      }
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, uid: user && user.uid, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
