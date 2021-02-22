import { useState, createContext } from "react";

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [popupState, setPopupState] = useState(false);

  return (
    <PopupContext.Provider value={[popupState, setPopupState]}>
      {children}
    </PopupContext.Provider>
  );
};
