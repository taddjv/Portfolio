import { useState, createContext, useContext } from "react";
export const GeneralContext = createContext();
export const useGeneral = () => useContext(GeneralContext);

export default function GeneralProvider({ children }) {
  const [buttonHover, setButtonHover] = useState(null);
  const [location, setLocation] = useState("center");
  return (
    <GeneralContext.Provider
      value={{ buttonHover, setButtonHover, location, setLocation }}
    >
      {children}
    </GeneralContext.Provider>
  );
}
