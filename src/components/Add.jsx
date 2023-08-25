import { useEffect } from "react"
import React from 'react'
import { useSharedState } from "../Context/DataContext.jsx"

export default function Add(){
    //these states are updating UI as soon as we interact with them
    const{data,setData,action, setAction, amount, setAmount}=useSharedState()
    
    //changing the state for action
    function hadnleActionChange(event){
        setAction(event.target.value);
     };
     
     //changing the state for amount
     function handleAmountChange(event){
         setAmount(event.target.value)
     };

    //check what function need to be performed first and according to value edit data and update UI
      function clickSave(){
        if(action=="AddCategory"){
           var updatedData=[...data,{id:data.length,category:"soemthing", allocatedBudget:amount,spendSoFar:0 }]
           setData(updatedData)
        }
        else if(action=="changeBud"){
            
        }
        else if(action=="addSpendings"){

        }
        else if(action=="reduceSpendings"){

        }
        else{
            alert("enter valid data please")
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
                          <option value="ChangeBud" name="chanage">Change your Allocated Budget</option>
                         <option value="addSpendings" name="Add">Add spendings</option>
                         <option value="reduceSpendings" name="Reduce">reduce spendings</option>
                     </select>	
                     }	
                 </div>
                 </div>
                 <div className='col-md-4'>
                    <div className='alert alert-secondary ml-4'>
                        Amount :{
                            <input type="" className=" ml-2" id="changingValue" placeholder='enter amount or category' onChange={handleAmountChange}/>

                        }
                    </div>
                    </div>
                    {action=="AddCategory" && <div className='col-md-4'>
                    <div className='alert alert-secondary ml-4'>
                        Category:{
                            <input type="" className=" ml-2" id="changingValue" placeholder='enter amount or category'/>

                        }
                    </div>
                   </div>}
                   {(action=="addSpendings" || action=="reduceSpendings" || action=="changeBud") && <div className='pb-3 alert alert-secondary'>Choose category: {
                     <select onChange={hadnleActionChange} name="action" id="action">
                          <option defaultValue>Choose...</option>
                          {data.map((value)=><option>{value.category}</option>)}
                          </select >}
                         </div>

                   }
    </div>
                 
                 <button type="submit" className="col-md-3 d-inline btn btn-outline-success ml-5" id="submitButton" onClick={clickSave}>Save
                 </button>
      </div>
   </>)

}