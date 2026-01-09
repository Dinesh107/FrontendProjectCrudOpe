import Employee from "./Employee.jsx";

function Office() {
  //  const empName = "harsth";
  //  const empCode = "VT101";
  // const empDetails = {
  // empName: "mani",
  // empCode: "VT101"
  // }

  // const isDataPresent = true;
  // const showEmpDetails = ;
  //  const showEmpDetails = empDetails.empName !== undefined && empDetails.empCode !== undefined;

  const empDetails = {
    empName: "mani",
    empCode: "VT101",
  };

  const employeeList = [
    {empName: "siva", empCode: "VT101"},
    {empName: "murugan", empCode: "VT102"},
    {empName: "lakshmi", empCode: "VT103"},
    {empName: "ganesh", empCode: "VT104"},
  ];
  const numberList = [1, 2, 3, 4, 5, 5];

  return (
    <>
      <h1>Who works in my office</h1>
      {/* <Employee empName = {empName} empCode = 'VT101' /> */}


      {/* {showEmpDetails ? <Employee empDetails={empDetails} /> : null } */}
 
        {empDetails.empName !== undefined && empDetails.empCode !== undefined && <Employee empDetails={empDetails} /> }

      {/* {isDataPresent ? (
        <h2>Office data is present</h2>
      ) : (
        <h2>Office data is not prsent</h2>
      )} */}

     
      <ul>
        { employeeList.map((empDetails) => <li key={empDetails.empName} ><Employee empDetails={empDetails} /></li>)} 
      </ul>
      <ul>
        { numberList.map((number, index) => <p key={index} > {number} </p>)} 
      </ul>

    </>
  );
}

export default Office;
