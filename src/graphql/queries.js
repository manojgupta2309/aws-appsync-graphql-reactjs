/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmployee = `query GetEmployee($id: ID!) {
  getEmployee(id: $id) {
    id
    firstname
    lastname
    address {
      items {
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
export const listEmployees = `query ListEmployees(
  $filter: ModelEmployeeFilterInput
  $limit: Int
  $nextToken: String
) {
  listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getAddress = `query GetAddress($id: ID!) {
  getAddress(id: $id) {
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
export const listAddresss = `query ListAddresss(
  $filter: ModelAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      line1
      line2
      city
      state
      zipcode
      employee {
        id
        firstname
        lastname
      }
    }
    nextToken
  }
}
`;
export const getSkill = `query GetSkill($id: ID!) {
  getSkill(id: $id) {
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
export const listSkills = `query ListSkills(
  $filter: ModelSkillFilterInput
  $limit: Int
  $nextToken: String
) {
  listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      employee {
        id
        firstname
        lastname
      }
    }
    nextToken
  }
}
`;
