import { createContext, useContext, useState, type ReactNode } from "react";

type User = { fullName: string; email: string; smsConsent: boolean } | null;

type AuthContextType = {
  user: User;
  signIn: (email: string) => void;
  signUp: (fullName: string, email: string, smsConsent: boolean) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
});

function loadUser(): User {
  try {
    const stored = localStorage.getItem("invctus_user");
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(loadUser);

  const signIn = (email: string) => {
    const u = { fullName: email.split("@")[0], email, smsConsent: false };
    setUser(u);
    localStorage.setItem("invctus_user", JSON.stringify(u));
  };

  const signUp = (fullName: string, email: string, smsConsent: boolean) => {
    const u = { fullName, email, smsConsent };
    setUser(u);
    localStorage.setItem("invctus_user", JSON.stringify(u));
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("invctus_user");
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
