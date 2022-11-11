import React, { createContext, useState, useContext, useEffect } from "react";
import { auth } from '../firebase'

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

type Props = {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);

  const value = {
    user,
    loading,
  };

  useEffect(() => {
    // TODO: 暫定でany型にしている
    const unsubscribed = auth.onAuthStateChanged((user: any) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribed();
    };
  }, []);

  if(loading){
    return <p>loading...</p>
  }else{
    return(
        <AuthContext.Provider value={value}>
          {!loading && children}
        </AuthContext.Provider>
      );
  }
}