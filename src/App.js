import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

function App() {
  const [users, updateUsers] = useState();

  const addUserHandler = (event) => {
    // updateUsers((prevUsers) => {
    //   newUsers.concat(prevUsers);
    // });
  };

  const removeUserHandler = (event) => {
    // updateUsers((prevUsers) => {
    //   prevUsers.filter((uidExisting) => {
    //     return uidToRemove !== uidExisting;
    //   });
    // });
  };

  return (
    <React.Fragment>
      <AddUser />
      <UserList />
    </React.Fragment>
  );
}

export default App;
