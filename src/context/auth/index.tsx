import React, { createContext, useState } from "react";
import { IAuthContext } from "./@types";

const defaultContext: IAuthContext = {
  login: () => {},
  token: undefined,
  setToken: () => {},
};
const AuthContext = createContext(defaultContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const AuthContextProvider = ({ children }: Props) => {
  const [token, setToken] = useState("abc");
  const login = () => {};

  return (
    <AuthContext.Provider
      value={{
        login,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
