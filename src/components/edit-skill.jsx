import React, { useState } from 'react'; 
import {updateSkill } from '../graphql/mutations'
import {API,graphqlOperation  } from "aws-amplify";

import './add-emp.css'

const EditSkill = (props) => {  
    console.log(props)
   const [skillState,setSkillState] = useState(props)

   const handleUpdate  =async e=>{
      e.preventDefault();
      const input = {
          id:skillState.id,
        name:skillState.name,
        skillEmployeeId:props.empId
        }
      const result = await API.graphql(graphqlOperation(updateSkill,{input}))
     
      console.log(result)
      console.log(skillState)
      props.closeModal(result.data)
    
    }

   const handleChange  = e=>{
     setSkillState({
       ...skillState,[e.target.name]:e.target.value
     })
   }

   return (
     <form onSubmit={handleUpdate}>
       <label htmlFor="skill">skill</label>
       <input type="text" name="name" value={skillState.name} onChange={handleChange} />
       <input type="submit" value="update skill"/>
     </form>
   )
   
};
export default EditSkill;