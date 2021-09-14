import React, { createContext, useState } from "react";

export const DisplayContext = createContext();

export const DisplayContextProvider = ({ children }) => {
  const [displayMode, setDisplayMode] = useState("light");

  return (
    <DisplayContext.Provider value={{ displayMode, setDisplayMode }}>
      {children}
    </DisplayContext.Provider>
  );
};
