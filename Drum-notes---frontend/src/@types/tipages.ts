import { ReactNode } from "react";

export interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextType {
  register: (nome: string, email: string, password: string) => void;
  login: (email: string, password: string) => Promise<void>;
  loggout: () => void
  user?: {
    id: string;
    email: string;
  };
  token?: string;
}

export interface AuthData {
  user?: {
    id: string;
    email: string;
  };
  token?: string;
}