import React, { useState } from 'react'; 

import {createAddress } from '../graphql/mutations'
import {API,graphqlOperation  } from "aws-amplify";

import './add-emp.css'

const AddAdrs = (props) => {  
  console.log(props)
   const [adrsState,setAdrsState] = useState({
    line1: "",
    line2: "",
    city: "",
    state: "",
    zipcode: "",
    addressEmployeeId:""
   })

   const handleAdd  =async e=>{
      e.preventDefault();
      const input = {
        line1:adrsState.line1,
        line2: adrsState.line2,
        city:adrsState.city,
        state: adrsState.state,
        zipcode: adrsState.zipcode,
        addressEmployeeId:props.id,
        }
      const result = await API.graphql(graphqlOperation(createAddress,{input}))

      console.log(result)
      console.log(adrsState)
      props.closeModal(result.data)
   }

   const handleChange  = e=>{
     setAdrsState({
       ...adrsState,[e.target.name]:e.target.value
     })
   }

   return (
     <form onSubmit={handleAdd}>    
       <label htmlFor="line1">line1</label>
       <input type="text" name="line1" value={adrsState.line1} onChange={handleChange} />
       <label htmlFor="line2">line2</label>
       <input type="text" name="line2" value={adrsState.line2} onChange={handleChange} />
       <label htmlFor="city">city</label>
       <input type="text" name="city" value={adrsState.city} onChange={handleChange} />
       <label htmlFor="state">state</label>
       <input type="text" name="state" value={adrsState.state} onChange={handleChange} />
       <label htmlFor="zipcode">zipcode</label>
       <input type="text" name="zipcode" value={adrsState.zipcode} onChange={handleChange} />
       <input type="submit" value="add address"/>
     </form>
   )
   
};
export default AddAdrs;