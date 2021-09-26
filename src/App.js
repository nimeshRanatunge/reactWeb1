import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import NameList from "./components/pages/NameList/NameList";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import HeaderBar from "./components/HeaderBar/HeaderBar";

function App(){
  return(
   <div>
     <BrowserRouter>
      <HeaderBar />
     
      <Switch>
        <Route path="/about"><About /></Route>
        
        <Route path="/namelist"><NameList /></Route>
        
        <Route path="/"><Home /></Route>
      </Switch>
      
     </BrowserRouter>
     
   </div>
  )
}

export default App