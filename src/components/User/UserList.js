import React from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

function UserList(props) {
    let existingUsers =  props.users; /*[{id: "test", name: "Test", age: "1"}];*/

  const userClickHandler = (event) => {
    console.log("Click!");
    props.onRemoveUser(event.target.key);
  };

  return (
    <Card className={styles.users}>
      <ul>
        {existingUsers.map((user) => (
          <li key={user.id} onClick={userClickHandler}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
