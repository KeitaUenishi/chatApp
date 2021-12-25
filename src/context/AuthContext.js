import React, { createContext, useState, useContext, useEffect } from "react";
import { auth } from '../firebase'

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState('');

  const value = {
    user,
  };

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      console.log(user);
      setUser(user);
    });
    return () => {
      unsubscribed();
    }
  }, [])

  return(
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
}