import React, { useState } from 'react'; 

import {createEmployee } from '../graphql/mutations'
import {API,graphqlOperation  } from "aws-amplify";

const AddEmp = () => {  
    const blankSkill = { name: '' };
    const blankAddress = { 
        line1:"",
        line2:"",
        city:"",
        state:"",
        zipcode:""
    };
    const [skillState, setSkillState] = useState([
      {...blankSkill},
    ]);
    const [addressState, setAddressState] = useState([
        {...blankAddress},
    ]);

      const [employeeState, setEmployeeState] = useState({
        firstname: '',
        lastname: '',
      });
    const handleEmployeeChange = (e) => setEmployeeState({
        ...employeeState,
        [e.target.name]: e.target.value,
      });
      const handleSkillChange = (e) => {
        const updatedSkills = [...skillState];
        updatedSkills[e.target.dataset.idx][e.target.className] = e.target.value;
        setSkillState(updatedSkills);
      };
    const addSkill = () => {
      setSkillState([...skillState, {...blankSkill}]);
    };
    const handleSubmit=async ()=>{
        const input = {
            firstname:employeeState.firstname,
            lastname:employeeState.lastname
       }
        const result = await API.graphql(graphqlOperation(createEmployee,{input}))
        console.log(result)
    }

    const handleAddressChange = (e) => {
        const updatedAddress = [...addressState];
        updatedAddress[e.target.dataset.idx][e.target.className] = e.target.value;
        setAddressState(updatedAddress);
      };
    const addAddress = () => {
      setSkillState([...skillState, {...blankSkill}]);
    };

  return (        
    <form>            
       <label htmlFor="owner">first name</label>   
      <input 
        type="text" 
        name="firstname" 
        id="firstname" 
        value={employeeState.firstname}
        onChange={handleEmployeeChange}
      /> 
      <label htmlFor="description">last name</label> 
      <input 
        type="text" 
        name="lastname" 
        id="lastname" 
        value={employeeState.lastname}
        onChange={handleEmployeeChange}     
      />
      {/* <input type="button" value="Add New Skill" onClick={addSkill} />      
      {
  skillState.map((val, idx) => {
    const skillId = `name-${idx}`;
    return (
      <div key={`cat-${idx}`}>
        <label htmlFor={skillId}>{`Skil #${idx + 1}`}</label>
        <input
          type="text"
          name={skillId}
          data-idx={idx}
          id={skillId}
          className="name" 
          value={skillState[idx].name}
          onChange={handleSkillChange}
        />
        
      </div>
    );      
  })
} */}
      <input type="button" value="Submit" onClick={handleSubmit}/>        
    </form>   
  );
};
export default AddEmp;