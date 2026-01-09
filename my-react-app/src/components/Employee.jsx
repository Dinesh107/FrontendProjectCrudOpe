import React from 'react'

function Employee(props) {
    const { empDetails } = props
    const { empName, empCode } = empDetails;  // object destructuring

 const text = `Hai i am employee my name is ${empName}, my employee code is ${empCode}`;

 
  return (
    <div>
        <h1>{text}</h1>
    </div>
  )
}

export default Employee