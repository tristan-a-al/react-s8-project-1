import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

function App() {
  const [users, updateUsers] = useState([]);

  const addUserHandler = (newUsers) => {
    updateUsers((prevUsers) => {
      users = newUsers.concat(prevUsers);
    });
  };

  const removeUserHandler = (uidToRemove) => {
    updateUsers((prevUsers) => {
      users = prevUsers.filter((uidExisting) => {
        return uidToRemove !== uidExisting;
      });
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList onRemoveUser={removeUserHandler} />
    </React.Fragment>
  );
}

export default App;
