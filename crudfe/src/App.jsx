import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setfilteredUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({ name: "", age: "", city: "" });
  // passthis data to the api
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
    const filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchText) ||
        user.city.toLowerCase().includes(searchText),
    );

    setfilteredUsers(filteredUsers);
  };

  // Delete

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Ar you sure you wnay to delete this user?",
    );
    if (isConfirmed) {
      await axios.delete(`http://localhost:8000/users/${id}`).then((res) => {
        setUsers(res.data); // before filterd it show all the data
        setfilteredUsers(res.data); // after fitered  it show the filterd data
      });
    }
  };

  // add user deails

  const handleAddRecord = () => {
    setUserData({ name: "", age: "", city: "" }); // resetting
    setIsModalOpen(true);
  };
  

  // close modal

  const closeModal = () => {
    setIsModalOpen(false);
  }

  // handledata

  const handleData = (e) => {
     setUserData({...userData, [e.target.name]: e.target.value})
  }

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
          <button onClick={handleAddRecord} className="btn green">
            Add
          </button>
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
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="btn red"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal} >&times;</span>
                <h2>User Record</h2>
                <div className="input-group">
                  <label htmlFor="name">Ful name </label>
                  <input type="text" value={userData.name} onChange={handleData} name="name" id="name" />
                </div>
                <div className="input-group">
                  <label htmlFor="age">Age </label>
                  <input type="number" value={userData.age} onChange={handleData} name="age" id="age" />
                </div>
                <div className="input-group">
                  <label htmlFor="city">City </label>
                  <input type="text" value={userData.city} onChange={handleData} name="city" id="city" />
                </div>
                <button className="btn green" >Add User</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
