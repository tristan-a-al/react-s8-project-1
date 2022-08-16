import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

/**
 *
 * @param {*} props
 * @returns
 */
function AddUser(props) {
  //   const [username, validateUsername] = useState();
  //   const [age, validateAge] = useState();
  //   const [userDetails, addUserToList] = useState();
  //   let isUsernameValid = false;
  //   let isAgeValid = false;
  //   let isFormEmpty = true;

  //   /**
  //    *
  //    * @param {*} event
  //    */
  //   const updateUsernameHandler = (event) => {};

  //   /**
  //    *
  //    * @param {*} event
  //    */
  //   const updateAgeHandler = (event) => {};

  /**
   *
   */
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label className={styles.input.label} htmlFor="username">
          Username
        </label>
        <input id="username" class={styles.input.input} type="text"></input>
        <label className={styles.input.label} htmlFor="age">
          Age (Years)
        </label>
        <input id="age" className={styles.input.input} type="number"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}

export default AddUser;
