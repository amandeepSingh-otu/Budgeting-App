import { useState } from "react"
import React from 'react'
import { useSharedState } from "../Context/DataContext.jsx"

export default function Add(){
    //these states are updating UI as soon as we interact with them
    const{totalBudget,data,setData,action, setAction, amount, setAmount}=useSharedState()
    const [category, setCategory]=useState('')
    
    //function handling state changes
        function hadnleActionChange(event){
        setAction(event.target.value);
     };
        function handleAmountChange(event){
         setAmount(event.target.value)
     };
        function handleCategoryChange(event) {
        setCategory(event.target.value)
      }

    //check what function need to be performed first and according to value edit data and update UI
      function clickSave(){
        
        if(action=="AddCategory"){
            var totalRemaining=0;
            data.map(value=>{
            totalRemaining+=parseFloat(value.allocatedBudget);
             })
            if(totalBudget>=(totalRemaining+parseFloat(amount))){
                var updatedData=[...data,{key:data.length-1,category:category, allocatedBudget:amount,spendSoFar:0 }]
                setData(updatedData)}
            else{
            alert("You are going over your Budget")        }
        }
        else if(action=="changeBud"){
           var updatedData=data.map(value=>{
            if(value.category==category){
                return { ...value, allocatedBudget: amount };
            }
            return value;
           })
           setData(updatedData)
        }
        else if(action=="addSpendings"){
            var updatedData = data.map((value) => {

              if (value.category === category) {
                var updatedSpendSoFar=parseFloat(value.spendSoFar);
                updatedSpendSoFar += parseFloat(amount);
                return {
                  ...value,
                  spendSoFar: updatedSpendSoFar,
                };
              }
              return value;
               })
               setData(updatedData)

        }
        else if(action=="reduceSpendings"){
            var updatedData = data.map((value) => {

                if (value.category === category) {
                  var updatedSpendSoFar=parseFloat(value.spendSoFar);
                  updatedSpendSoFar -= parseFloat(amount);
                  return {
                    ...value,
                    spendSoFar: updatedSpendSoFar,
                  };
                }
                return value;
                 })
                 setData(updatedData)
  
        }
        else{
            alert(action)
        }    
    }

   return(
   <>
    <div className="p-2" id="change">
           <h2>Change Allocations</h2>
     </div>
    <div className="container-fluid ">
             <div className='row pl-4'>
                <div className="col-md-4">
                 <div className='pb-3 alert alert-secondary'>Action: {
                     <select onChange={hadnleActionChange} name="action" id="action">
                          <option defaultValue>Choose...</option>
                          <option value="AddCategory" name="addCate"> Add new Category</option>
                          <option value="changeBud" name="chanage">Change your Allocated Budget</option>
                         <option value="addSpendings" name="Add">Add spendings</option>
                         <option value="reduceSpendings" name="Reduce">reduce spendings</option>
                     </select>	
                     }	
                 </div>
                 </div>
                 {action=="AddCategory" && <div className='col-md-4'>
                    <div className='alert alert-secondary ml-4'>
                        Category:
                            <input type="" className=" ml-2" id="changingValue" onChange={handleCategoryChange} placeholder='enter amount or category'/>
                    </div>
                   </div>}
                   {(action=="addSpendings" || action=="reduceSpendings" || action=="changeBud") && <div className='pb-3 alert alert-secondary'>Choose category:
                     <select onChange={handleCategoryChange} name="action" id="action">
                          <option defaultValue>Choose...</option>
                          {data.map((value)=><option key={value.id}>{value.category}</option>)}
                          </select >
                         </div>

                   }
                 <div className='col-md-4'>
                    <div className='alert alert-secondary ml-4'>
                        Amount :{
                            <input type="" className=" ml-2" id="changingValue" placeholder='enter amount or category' onChange={handleAmountChange}/>

                        }
                    </div>
                    </div>
                   
    </div>
                 
                 <button type="submit" className="col-md-3 d-inline btn btn-outline-success ml-5" id="submitButton" onClick={clickSave}>Save
                 </button>
      </div>
   </>)

}