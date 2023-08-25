import React, {useEffect} from 'react';
import {useSharedState} from "../Context/DataContext.jsx"


const Currency = () => {
  const {currency, setCurrency}=useSharedState();

  function handleChange(event){
        setCurrency(event.target.value)
  }
  return (
        <div className='alert alert-secondary'>currency {
      <select name="Currency" id="Currency" onChange={handleChange}>
        <option value="£ ">Uk(£)</option>
        <option value="₹ ">India(₹)</option>
        <option value="€ ">Europe(€)</option>
        <option value="CA $ ">Canada(CAD)</option>
      </select>	
      }	
    </div>
    );
};

export default Currency;