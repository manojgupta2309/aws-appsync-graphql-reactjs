# BuildOps developed with ReactJS,GraphQL,AWS AppSync  and DynamoDB 

## There are 3 major stacks in this application which are given below

1. AWS AppSync & Amplify
2. ReactJS ( Frontend ) 
3. GraphQL ( API)

## We will start with AWS AppSync Setup and AWS Console.
1. Create account on [AWS Console](https://console.aws.amazon.com/console)
    ![aws](https://github.com/manojgupta2309/aws-appsync-graphql-reactjs/blob/master/public/project-images/create.PNG) 

2. There are 2 ways to create AppSync GraphQL API

    1. Through AWS console online 
    
        ![aws](https://github.com/manojgupta2309/aws-appsync-graphql-reactjs/blob/master/public/project-images/appsync.PNG) 

        ![aws](https://github.com/manojgupta2309/aws-appsync-graphql-reactjs/blob/master/public/project-images/create%20api.PNG)

        ![aws](https://github.com/manojgupta2309/aws-appsync-graphql-reactjs/blob/master/public/project-images/project%20name.PNG)

        ![aws](https://github.com/manojgupta2309/aws-appsync-graphql-reactjs/blob/master/public/project-images/edit%20terminal.PNG)

        ![aws](https://github.com/manojgupta2309/aws-appsync-graphql-reactjs/blob/master/public/project-images/edit%20schema.PNG)

        ![aws](https://github.com/manojgupta2309/aws-appsync-graphql-reactjs/blob/master/public/project-images/employee-ds.PNG)

        ![aws](https://github.com/manojgupta2309/aws-appsync-graphql-reactjs/blob/master/public/project-images/queries%20terminal.PNG)

       Now the backend GraphQL API is ready to integrate with any fontend client application.

       In This method, We have to integrate the API later once the Client Application is developed.
       I completed this part first than I moved to client application part that was for testing purpose but
       In final application I created a new AppSync service using aws amplify CLI commands i.e the 2nd method.
        
    2. Through AWS Amplify CLI commands 

        1. Install [NodeJS](https://nodejs.org/en/)
        
        2. Run  ` npm install -g @aws-amplify/cli ` on CLI
            
            This command will install @aws-appsync packages gloablly
        3. Now initiate the aws amplify ` amplify init ` on CLI
        4. Follow steps proide project details and client application development stack, wait.. for setup to complete.
        5. Run ` amplify add api `  select GraphQL API and provide API details.
        6. Selet edit schema now and it wil open schema.graphql file now create the API model.
        
            ```javascript

                    type Employee @model{ 
                    id: ID!
                    firstname: String!
                    lastname: String!
                    address: [Address] @connection(name: "EmployeeAddress") 
                    skills: [Skill] @connection(name: "EmployeeSkill")
                    
                    }

                    
                    type Address @model {
                    id:ID!
                    line1: String!
                    line2: String!
                    city: String!
                    state: String!
                    zipcode: String!
                    employee: Employee @connection(name: "EmployeeAddress")
                    }
                    
                    type Skill @model {
                    id: ID!
                    name: String!
                    employee: Employee @connection(name: "EmployeeSkill")
                    }
                
            ```


            Here model represents a modelto the databse and connection is to give the reference with another model.
        7. Run `amplify push ` this command will create the schema for GraphQL and DynamoDB database follow the steps.
        8. Below are the screen shots for the AWS backend development work.
            ![aws](https://github.com/manojgupta2309/aws-appsync-graphql-reactjs/blob/master/public/project-images/buildops-crt.PNG) 

            ![aws](https://github.com/manojgupta2309/aws-appsync-graphql-reactjs/blob/master/public/project-images/buildops-sc.PNG)

            ![aws](https://github.com/manojgupta2309/aws-appsync-graphql-reactjs/blob/master/public/project-images/buildops-ds.PNG)

            ![aws](https://github.com/manojgupta2309/aws-appsync-graphql-reactjs/blob/master/public/project-images/empl%20tabl.PNG)

            ![aws](https://github.com/manojgupta2309/aws-appsync-graphql-reactjs/blob/master/public/project-images/skill%2tbl.PNG)

            ![aws](https://github.com/manojgupta2309/aws-appsync-graphql-reactjs/blob/master/public/project-images/adrs%20table.PNG)

            ![aws](https://github.com/manojgupta2309/aws-appsync-graphql-reactjs/blob/master/public/project-images/buildops-qr.PNG)
        
        Here we completed the backend setup and same is integrated with ReactJS client application using aws amplify service.

    


         
                 
                
