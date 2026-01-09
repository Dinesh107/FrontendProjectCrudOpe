import React, { useState } from "react";

function Managers() {
  // const [managerName, setManagerName] = useState("Siva")
  // const [companyName, setCompanyName] = useState("L&T")
  // const [projectName, setProjectName] = useState("DLFEASTFACE2")
  // const [role, setRole] = useState("Permanent")

  // const [manager, setManager] = useState({
  //   managerName: "Siva",
  //   companyName: "L&T",
  //   projectName: "DLFEASTFACE2",
  //   role: "Permanent",
  // });

  // function updateManagerName() {
  //   setManager({managerName: "murugan"})
  // }

  // function updateManagerName() {
  //   setManager(previousState => {
  //     return  {...previousState, managerName: "Muruga"}
  //   })
  // }

  // console.log("current state", manager);

  return (
    <>
      <h1>My Managers</h1>
      <p>Manager Name: {manager.managerName}</p>
      <p>Company Name: {manager.companyName}</p>
      <p>Project Name: {manager.projectName}</p>
      <p>Role: {manager.role}</p>
      <button onClick={updateManagerName}>Change manager name</button>
    </>
  );
}

export default Managers;
