import React, { useState } from 'react'; 

import {updateEmployee } from '../graphql/mutations'
import {API,graphqlOperation  } from "aws-amplify";

import './add-emp.css'

const EditEmp = (props) => {  
    console.log(props)
   const [empState,setEmpState] = useState(props.item)

   const handleUpdate  =async e=>{
      e.preventDefault();
      const input = {
          id:empState.id,
        firstname:empState.firstname,
        lastname:empState.lastname
        }
      const result = await API.graphql(graphqlOperation(updateEmployee,{input}))

      console.log(result)
      
      props.closeModal(result.data.createEmployee)
        

   }

   const handleChange  = e=>{
     setEmpState({
       ...empState,[e.target.name]:e.target.value
     })
   }

   return (
     <form onSubmit={handleUpdate}>
       <label htmlFor="firstname">first name</label>
       <input type="text" name="firstname" value={empState.firstname} onChange={handleChange} />
       <label htmlFor="lastname">last name</label>
       <input type="text" name="lastname" value={empState.lastname} onChange={handleChange} />
       <input type="submit" value="update employee"/>
     </form>
   )
   
};
export default EditEmp;