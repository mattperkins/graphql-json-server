# 'npm run s' = nodemon server.js

# http://localhost:4000/graphiql

# 'npm run jsn' = json-server --watch data.json

# http://localhost:3000/customers
## http://localhost:3000


# GraphiQL

## Fetch customer request
```
{
  customers {
    id
    name
    email
    age	
  }
}
```
## addCustomer
```
mutation {
  addCustomer(
    name: "",
    email: "",
    age: 
  ) 
}
```
## deleteCustomer
```
mutation{
  deleteCustomer(id:"") 
}
```
## editCustomer
```
mutation{
  editCustomer(
    id: "1",
    name: "",
    email: "",
    age: 
  ) 
}
```
