import { createContext, useContext, useEffect, useState } from "react";
import type { AuthContextType, AuthData, AuthProviderProps } from "../@types/tipages";
import { api } from "../services/api";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthData>({});

  useEffect(() => {
   const user = localStorage.getItem("@DrumNotes:user");
   const token = localStorage.getItem("@DrumNotes:token");
    
   if (user && token) {
    setData({ user: JSON.parse(user), token });
    api.defaults.headers.authorization = `Bearer ${token}`;
   }
  }, []);

  async function register(nome: string, email: string, password: string) {
    try {
      await api.post('/users/create', {
        nome,
        email,
        password,
      });
    } catch (error) {
      console.error("Error ao registrar usuário.");
    }
  }

  async function login(email: string, password: string) {
    try {
      const res = await api.post("/users/auth", { email, password });
      const { user, token } = res.data;
  
      localStorage.setItem("@DrumNotes:user", JSON.stringify(user));
      localStorage.setItem("@DrumNotes:token", token);
  
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      alert("Não foi possível logar.");
    }
  }

  async function loggout() {
   localStorage.removeItem("@DrumNotes:user");
   localStorage.removeItem("@DrumNotes:token");
   api.defaults.headers.authorization = '';
   setData({});
  }

  return (
   <AuthContext.Provider value={{ register, login, user: data.user, token: data.token, loggout }}>
    {children}
   </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('Falha ao usar contexto');
  }
  return context;
}

export { AuthProvider, useAuth };
