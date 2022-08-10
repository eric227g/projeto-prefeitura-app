import React, {
  createContext,
  useContext,
  useMemo,
} from 'react';
import useLogic from './uselogic';

import {
  AuthContextData,
  AuthProviderProps,
} from './type';


const AuthContext = createContext<AuthContextData>({} as AuthContextData,);

function AuthProvider({ children }: AuthProviderProps) {
  const {
      authState: { user, isUserDataPresent },
      signOut,
      signIn,
      signUp,
  } = useLogic();
  const contextValue = useMemo(
      () => ({
          user,
          isUserDataPresent,
          signOut,
          signIn,
          signUp,
      }),
      [user, isUserDataPresent, signIn, signOut, signUp],
  );

  return (
      <AuthContext.Provider value={contextValue}>
          {children}
      </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
      throw new Error(
          'useAuth must be used within an AuthProvider',
      );
  }

  return context;
}

export { AuthProvider, useAuth };
