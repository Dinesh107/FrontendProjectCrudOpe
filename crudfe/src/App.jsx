import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setfilteredUsers] = useState([]);

  const getAllUsers = async () => {
    await axios.get("http://localhost:8000/users").then((res) => {
      setUsers(res.data); // before filterd it show all the data
      setfilteredUsers(res.data); // after fitered  it show the filterd data
      console.log(res.data);
    });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  // handleSearchChange

  const handleSearchChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchText) ||
        user.city.toLowerCase().includes(searchText)) 
 
    setfilteredUsers(filteredUsers);
  };

  return (
    <>
      <div className="container">
        <h3>Crud App with React js and Express as Backend</h3>
        <div className="input-search">
          <input
            type="search"
            placeholder="Search"
            onChange={handleSearchChange}
          />
          <button className="btn green">Add</button>
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers &&
                filteredUsers.map((user, index) => {
                  return (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.age}</td>
                      <td>{user.city}</td>
                      <td>
                        <button className="btn  green">Edit</button>
                      </td>
                      <td>
                        <button className="btn red">Delete</button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
