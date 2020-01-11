import React, { useState } from 'react'; 
import {createSkill } from '../graphql/mutations'
import {API,graphqlOperation  } from "aws-amplify";

import './add-emp.css'

const AddSkill = (props) => {  
   const [skillState,setSkillState] = useState({
     skill:""
    })

   const handleAdd  =async e=>{
      e.preventDefault();
      const input = {
        name:skillState.skill,
        skillEmployeeId:props.id
        }
      const result = await API.graphql(graphqlOperation(createSkill,{input}))
     
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
     <form onSubmit={handleAdd}>
       <label htmlFor="skill">skill</label>
       <input type="text" name="skill" value={skillState.skill} onChange={handleChange} />
       <input type="submit" value="add skill"/>
     </form>
   )
   
};
export default AddSkill;