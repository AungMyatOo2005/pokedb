import { createContext, useReducer } from "react";
import { AppReducer, initialState } from "./AppReducer";

export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
