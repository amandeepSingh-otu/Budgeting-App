// SharedStateContext.js
import React, { createContext, useContext, useState } from 'react';
import Data from "../components/Data.jsx"

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [data, setData] = useState(Data);
  const [totalBudget, setTotalBudget] = useState(null);
  const [currency, setCurrency] = useState("CA $");
  const [action, setAction] = useState(null);
  const [amount, setAmount] = useState(null);

  return (
    <StateContext.Provider value={{ data,setData,totalBudget,setTotalBudget, currency,setCurrency,action,setAction, amount,setAmount}}>
      {children}
    </StateContext.Provider>
  );
};

export const useSharedState = () => {
  return useContext(StateContext);
};
