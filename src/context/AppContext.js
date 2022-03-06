import { useState, createContext } from 'react';

const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [store, setStore] = useState({});

  return (
    <AppContext.Provider value={{ store, setStore }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
