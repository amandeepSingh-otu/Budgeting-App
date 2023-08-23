import { useEffect } from "react"
import React, {useState} from 'react'
import Data from "./Data.jsx"

//still nedd to use context and states :(

export default function Add(){

    const[amount,setAmount]=useState(0)

    function hadnleCLick(){
        console.log(totalBudget.current.value)
     };
     
     function handleChange(event){
         setAmount(event.target.value)
     };

     useEffect(() => {
        console.log(amount); // Log the updated value when it changes
      }, [setAmount]);

   return(
   <>
    <div className="p-2" id="change">
           <h2>Change Allocations</h2>
     </div>
    <div className="container-fluid ">
             <div className='row pl-4'>
                <div className="col-md-4">
                 <div className='pb-3 alert alert-secondary'>Action: {
                     <select name="action" id="action">
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
                            <input type="" className=" ml-2" id="changingValue" placeholder='enter amount or category' onChange={handleChange}/>

                        }
                    </div>
                    </div>
                    <div className='col-md-4'>
                    <div className='alert alert-secondary ml-4'>
                        Category :{
                            <input type="" className=" ml-2" id="changingValue" placeholder='enter amount or category' onChange={handleChange}/>

                        }
                    </div>
                   
    </div>
    </div>
                 
                 <button type="submit" className="col-md-3 d-inline btn btn-outline-success ml-5" id="submitButton" onClick={hadnleCLick}>Save
                 </button>
      </div>
   </>)

}