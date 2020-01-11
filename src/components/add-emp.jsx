import React, { useState } from 'react'; 

import {createEmployee } from '../graphql/mutations'
import {API,graphqlOperation  } from "aws-amplify";

import './add-emp.css'

const AddEmp = (props) => {  
   const [empState,setEmpState] = useState({
     firstname:"",
     lastname:""
   })

   const handleAdd  =async e=>{
      e.preventDefault();
      const input = {
        firstname:empState.firstname,
        lastname:empState.lastname
        }
      const result = await API.graphql(graphqlOperation(createEmployee,{input}))

      console.log(result)
      console.log(empState)
      props.closeModal(result.data)
        

   }

   const handleChange  = e=>{
     setEmpState({
       ...empState,[e.target.name]:e.target.value
     })
   }

   return (
     <form onSubmit={handleAdd}>
       <label htmlFor="firstname">first name</label>
       <input type="text" name="firstname" value={empState.firstname} onChange={handleChange} />
       <label htmlFor="lastname">last name</label>
       <input type="text" name="lastname" value={empState.lastname} onChange={handleChange} />
       <input type="submit" value="add employee"/>
     </form>
   )
   
};
export default AddEmp;