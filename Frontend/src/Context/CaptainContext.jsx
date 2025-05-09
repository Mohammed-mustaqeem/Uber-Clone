import React, { createContext, useContext, useState } from "react";

// Create the context
export const captainDataContext = createContext();


// Create the provider component
export const CaptainContext = ({ children }) => {
  const [Captain, setCaptain] = useState(null);
  const[isLoading, setIsLoading] = useState(false)
  const[error, setError] = useState(null)

  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };

  const value={
    Captain,
    setCaptain,
    isLoading,
    setIsLoading,
    error,
    setError,
    updateCaptain
  }

  return (
    <captainDataContext.Provider value={[Captain, setCaptain]}>
      {children}
    </captainDataContext.Provider>
  );
};
