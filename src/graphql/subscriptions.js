/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEmployee = `subscription OnCreateEmployee {
  onCreateEmployee {
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
export const onUpdateEmployee = `subscription OnUpdateEmployee {
  onUpdateEmployee {
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
export const onDeleteEmployee = `subscription OnDeleteEmployee {
  onDeleteEmployee {
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
export const onCreateAddress = `subscription OnCreateAddress {
  onCreateAddress {
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
export const onUpdateAddress = `subscription OnUpdateAddress {
  onUpdateAddress {
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
export const onDeleteAddress = `subscription OnDeleteAddress {
  onDeleteAddress {
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
export const onCreateSkill = `subscription OnCreateSkill {
  onCreateSkill {
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
export const onUpdateSkill = `subscription OnUpdateSkill {
  onUpdateSkill {
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
export const onDeleteSkill = `subscription OnDeleteSkill {
  onDeleteSkill {
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
