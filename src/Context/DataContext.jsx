// SharedStateContext.js
import React, { createContext, useContext, useState } from 'react';


const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [totalBudget, setTotalBudget] = useState(1800);
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
