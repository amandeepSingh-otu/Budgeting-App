import React,{useEffect}from 'react';
import Currency  from './Currency';
import {useSharedState} from "../Context/DataContext.jsx"


export default function Budget(){

        const {data}=useSharedState();
        const{totalBudget,setTotalBudget,currency, setCurrency}=useSharedState();
        const numberPattern = /^-?\d+(\.\d+)?$/; // This regex matches integers and decimals

        function isNumberValid(inputValue) {
             return numberPattern.test(inputValue);
        }
        var totalSpend=0;
       data.map(value=>{
            totalSpend+=parseFloat(value.spendSoFar);
        })


    function handleTotalBudgetChange(event){
        if(isNumberValid(event.target.value) && event.target.value!=''){
            setTotalBudget(parseInt(event.target.value))}
    }
    return(<>
        <div className="row pl-5">
            <div className='col-sm-3.5 alert alert-primary'>
                Total Budget:{currency} <input type="number" defaultValue={1800} className="d-inline m-1" id="totalBudget" placeholder="Enter Total budget" name="totalBudget" onChange={handleTotalBudgetChange}/>
            </div>
            <div className="col-sm-2 alert alert-primary p-3 ml-2">
                Remaining: {currency} {totalBudget-totalSpend}
            </div>
            <div className="col-sm-2 alert alert-primary p-3 mr-2 ml-2">Spent so far: {currency}{totalSpend}</div>
           <Currency className="col-sm-2"/>
        </div>
       
        </>)
}
