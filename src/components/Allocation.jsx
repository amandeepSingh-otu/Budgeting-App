import React,{useEffect} from "react";
import {useSharedState} from "../Context/DataContext.jsx"

export default function Allocation() {

  const {data,setData,currency}=useSharedState()

  function handleDelete(idToDelete) {
    const updatedData=data.filter((item) => item.id !== idToDelete)
    setData(updatedData)
    
  }
  
  /*useEffect(()=>{setData((Data),[Data])
  console.log(data)});*/
  //this needs to be update to work propely goona use json file  

  return (
    <>
      <h3 className="col-sm">Allocations</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Category</th>
            <th>Allocated Budget</th>
            <th>Spend So far</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value) => {
            return (
              <tr key={value.category}>
                <td>{value.category}</td>
                <td>{currency}{value.allocatedBudget}</td>
                <td>{currency}{value.spendSoFar}</td>
                <td>
                  <button type="button" className="btn btn-danger" onClick={()=>handleDelete(value.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
