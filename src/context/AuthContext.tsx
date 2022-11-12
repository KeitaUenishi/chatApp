import React, { createContext, useState, useContext, useEffect } from "react";
import { auth } from '../firebase'

type Props = {
  children: React.ReactNode;
}

type Value = {
  user: string;
  loading: boolean;
}

const defaultValue: Value = {
  user: '',
  loading: true,
}

const AuthContext = createContext(defaultValue);

export function useAuthContext() {
  return useContext(AuthContext);
}


export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);
  
  const value: Value = {
    user,
    loading,
  };

  useEffect(() => {
    // TODO: any型をなくす
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