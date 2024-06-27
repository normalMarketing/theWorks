import { useState, createContext, useContext, Children } from 'react';

const GlobalContext = createContext();
export const useGlobalContext = () => {
  const { passwordDetails, setPasswordDetails } = useContext(GlobalContext);
  return { passwordDetails, setPasswordDetails };
};

const AppContext = ({ children }) => {
  const [passwordDetails, setPasswordDetails] = useState({
    currentPassword: '',
    newPassword: '',
    newPassword2: '',
    confirmationCode: '',
  });
  return (
    <GlobalContext.Provider value={{ passwordDetails, setPasswordDetails }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
