let Data = [
    {
      id:0,
      category: "Category 1",
      allocatedBudget: 1000,
      spendSoFar: 500,
    },
    { id:1,
      category: "Category 2",
      allocatedBudget: 1500,
      spendSoFar: 750,
    },
    {
      id:2,
      category: "Category 3",
      allocatedBudget: 800,
      spendSoFar: 400,
    },
    // Add more data objects as needed
  ];
  
  export function updateData(updatedData){
      Data=updatedData;
     }
 
  

export default Data;