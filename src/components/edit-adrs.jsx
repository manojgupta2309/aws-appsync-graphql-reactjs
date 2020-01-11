import React, { useState } from 'react'; 

import {updateAddress } from '../graphql/mutations'
import {API,graphqlOperation  } from "aws-amplify";

import './add-emp.css'

const EditAdrs = (props) => {  
  console.log(props)
  console.log(props.id)
   const [adrsState,setAdrsState] = useState(props.adrs)

   const handleUpdate  =async e=>{
      e.preventDefault();
      const input = {
        id:adrsState.id,
        line1:adrsState.line1,
        line2: adrsState.line2,
        city:adrsState.city,
        state: adrsState.state,
        zipcode: adrsState.zipcode,
        addressEmployeeId:props.empId,
        }
      const result = await API.graphql(graphqlOperation(updateAddress,{input}))

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
     <form onSubmit={handleUpdate}>    
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
       <input type="submit" value="update address"/>
     </form>
   )
   
};
export default EditAdrs;