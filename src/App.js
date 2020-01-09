import React from 'react';
import './App.css';
import { Route, Link, Switch,BrowserRouter as Router } from 'react-router-dom'
import Header from './components/header'
import Employee from './components/employee'
import AddEmp from './components/add-emp'
import Emp from './components/emp-card'


import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">

     <Router> 
       <div>
          <Header/>
           <br/>
           
          <Switch> 
          <Route exact path="/" component={Emp} />
          <Route path="/add-employee" component={AddEmp} />
         <Route path="/employee/:id" component={Employee} />

         </Switch> 
            
           
         </div>
         </Router>
    </div>
  );
}

export default App;
