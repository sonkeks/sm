export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
  photo?: string;
  partnerId?: string;
}

export interface AuthData {
  email: string;
  password: string;
  username?: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (authData: AuthData) => void;
  logout: () => void;
  register: (authData: AuthData) => void;
}
