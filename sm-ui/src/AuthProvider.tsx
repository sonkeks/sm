// AuthProvider.tsx
import React, { useState, ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { AuthContextType, User, AuthData } from "./models/User";

const DUMMY_USER: User = {
  id: "0",
  username: "sonke.s",
  email: "soenke.schaarschmidt@gmx.de",
  role: "sub",
};

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const login = (authData: AuthData) => {
    // fetch user here
    console.log("logged in as: " + DUMMY_USER.username);
    setIsAuthenticated(true);
    setUser(DUMMY_USER);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const register = (authData: AuthData) => {
    // fetch user here
    console.log("registered as: " + authData.username);
    setIsAuthenticated(true);
    setUser(DUMMY_USER);
  };

  const value: AuthContextType = {
    isAuthenticated,
    user,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
