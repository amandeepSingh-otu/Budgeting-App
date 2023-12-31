
import React from 'react'
import Navigation from "./components/navigation.jsx"
import Budget from "./components/Budget.jsx"
import "./App.css"
import Allocation from "./components/Allocation.jsx"
import Add from "./components/Add.jsx"
import { StateProvider } from './Context/DataContext.jsx'


function App() {
 

  return (
    <StateProvider>
    <div>
        <Navigation />
        <Budget />
        <Allocation />
        <Add />
       
    
    </div>
    </StateProvider>
  )
}

export default App
