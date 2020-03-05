import React from "react"

import GetDataFromFlask from "./componets/GetDataFromFlask/GetDataFromFlask"
import HomePage from "./componets/HomePage/HomePage"


import { Route } from "react-router-dom"



function App() {

  return (
    <div className="App">
      
      <Route path = "/product"> <GetDataFromFlask /> </Route>
      <Route path = "/" exact > <HomePage /> </Route>
      
    </div>
  );
}

export default App;
