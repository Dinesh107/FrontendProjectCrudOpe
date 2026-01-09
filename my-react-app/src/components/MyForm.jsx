import React, { useState } from 'react'

function MyForm() {

//    const [name, setName] = useState("");
//    const [age, setAge] = useState("");
//    const [email, setEmail] = useState("");

  const [input, setInputs] = useState({email: "@gmail.com"});
    
  //console.log("current state", name);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`form submmited`);
    // console.log("current state", name, age, email);
    console.log("current state", input);
  }

  function handleChange(e) {
      const name = e.target.name;
      const value = e.target.value;
      //                                                          name : dwd
      //                                                          age : 56
      //                                                           email : crty@gmail.com
      setInputs((previousState) =>  { return { ...previousState,  [name] : value}})
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label> Enter your name: <input type="text" name="name" onChange={handleChange}/></label>
        <br /><br />
        <label> Enter your age: <input type="text" name="age" onChange={handleChange}/></label>
        <br /><br />
        <label> Enter your email: <input type="text" name="email" value={input.email} onChange={handleChange}/></label>
          <br /><br />
        <input type="submit" value="submit form" />

      </form>

    </>
  )
}


export default MyForm