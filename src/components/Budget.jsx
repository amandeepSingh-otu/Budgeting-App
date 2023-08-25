import React,{useEffect}from 'react';
import Currency  from './Currency';
import {useSharedState} from "../Context/DataContext.jsx"


export default function Budget(){

    const{totalBudget,setTotalBudget,currency, setCurrency}=useSharedState();
        const numberPattern = /^-?\d+(\.\d+)?$/; // This regex matches integers and decimals

        function isNumberValid(inputValue) {
             return numberPattern.test(inputValue);
        }


    function handleTotalBudgetChange(event){
        if(isNumberValid(event.target.value) && event.target.value!=''){
            setTotalBudget(parseInt(event.target.value))}
    }
    useEffect(() => {
        console.log(totalBudget); // Log the updated value when it changes
      }, [totalBudget]);

    return(<>
        <div className="row pl-5">
            <div className='col-sm-3.5 alert alert-primary'>
                Total Budget:{currency} <input type="number" className="d-inline m-1" id="totalBudget" placeholder="Enter Total budget" name="totalBudget" onChange={handleTotalBudgetChange}/>
            </div>
            <div className="col-sm-2 alert alert-primary p-3 ml-2">
                Remaining: {currency}
            </div>
            <div className="col-sm-2 alert alert-primary p-3 mr-2 ml-2">Spent so far: {currency}</div>
           <Currency className="col-sm-2"/>
        </div>
       
        </>)
}
