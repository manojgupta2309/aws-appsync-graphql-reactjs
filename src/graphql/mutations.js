/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEmployee = `mutation CreateEmployee(
  $input: CreateEmployeeInput!
  $condition: ModelEmployeeConditionInput
) {
  createEmployee(input: $input, condition: $condition) {
    id
    firstname
    lastname
    address {
      items {
        id
        line1
        line2
        city
        state
        zipcode
      }
      nextToken
    }
    skills {
      items {
        id
        name
      }
      nextToken
    }
  }
}
`;
export const updateEmployee = `mutation UpdateEmployee(
  $input: UpdateEmployeeInput!
  $condition: ModelEmployeeConditionInput
) {
  updateEmployee(input: $input, condition: $condition) {
    id
    firstname
    lastname
    address {
      items {
        id
        line1
        line2
        city
        state
        zipcode
      }
      nextToken
    }
    skills {
      items {
        id
        name
      }
      nextToken
    }
  }
}
`;
export const deleteEmployee = `mutation DeleteEmployee(
  $input: DeleteEmployeeInput!
  $condition: ModelEmployeeConditionInput
) {
  deleteEmployee(input: $input, condition: $condition) {
    id
    firstname
    lastname
    address {
      items {
        id
        line1
        line2
        city
        state
        zipcode
      }
      nextToken
    }
    skills {
      items {
        id
        name
      }
      nextToken
    }
  }
}
`;
export const createAddress = `mutation CreateAddress(
  $input: CreateAddressInput!
  $condition: ModelAddressConditionInput
) {
  createAddress(input: $input, condition: $condition) {
    id
    line1
    line2
    city
    state
    zipcode
    employee {
      id
      firstname
      lastname
      address {
        nextToken
      }
      skills {
        nextToken
      }
    }
  }
}
`;
export const updateAddress = `mutation UpdateAddress(
  $input: UpdateAddressInput!
  $condition: ModelAddressConditionInput
) {
  updateAddress(input: $input, condition: $condition) {
    id
    line1
    line2
    city
    state
    zipcode
    employee {
      id
      firstname
      lastname
      address {
        nextToken
      }
      skills {
        nextToken
      }
    }
  }
}
`;
export const deleteAddress = `mutation DeleteAddress(
  $input: DeleteAddressInput!
  $condition: ModelAddressConditionInput
) {
  deleteAddress(input: $input, condition: $condition) {
    id
    line1
    line2
    city
    state
    zipcode
    employee {
      id
      firstname
      lastname
      address {
        nextToken
      }
      skills {
        nextToken
      }
    }
  }
}
`;
export const createSkill = `mutation CreateSkill(
  $input: CreateSkillInput!
  $condition: ModelSkillConditionInput
) {
  createSkill(input: $input, condition: $condition) {
    id
    name
    employee {
      id
      firstname
      lastname
      address {
        nextToken
      }
      skills {
        nextToken
      }
    }
  }
}
`;
export const updateSkill = `mutation UpdateSkill(
  $input: UpdateSkillInput!
  $condition: ModelSkillConditionInput
) {
  updateSkill(input: $input, condition: $condition) {
    id
    name
    employee {
      id
      firstname
      lastname
      address {
        nextToken
      }
      skills {
        nextToken
      }
    }
  }
}
`;
export const deleteSkill = `mutation DeleteSkill(
  $input: DeleteSkillInput!
  $condition: ModelSkillConditionInput
) {
  deleteSkill(input: $input, condition: $condition) {
    id
    name
    employee {
      id
      firstname
      lastname
      address {
        nextToken
      }
      skills {
        nextToken
      }
    }
  }
}
`;
