import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

function App() {
  const [existingUsers, setExistingUsers] = useState([]);

  const addUserHandler = (name, age) => {
    console.log("Adding new user... ", name, age);
    let id = Math.random();
    let newUser = {
      id: id,
      name: name,
      age: age,
    };
    setExistingUsers((prevUsers) => {
      console.log([newUser, ...prevUsers]);
      return [newUser, ...prevUsers];
    });
  };

  const removeUserHandler = (uidToRemove) => {
    console.log("Deleting user ", uidToRemove);
    setExistingUsers((prevUsers) => {
      return [...prevUsers].filter((uidExisting) => {
        return uidToRemove !== uidExisting;
      });
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={existingUsers} onRemoveUser={removeUserHandler} />
    </React.Fragment>
  );
}

export default App;
