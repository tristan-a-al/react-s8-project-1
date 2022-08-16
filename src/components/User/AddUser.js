import React, { useState } from "React";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

/**
 *
 * @param {*} props
 * @returns
 */
function AddUser(props) {
  const [username, validateUsername] = useState();
  const [age, validateAge] = useState();
  const [userDetails, addUserToList] = useState();
  let isUsernameValid = false;
  let isAgeValid = false;
  let isFormEmpty = true;

  /**
   *
   * @param {*} event
   */
  const updateUsernameHandler = (event) => {};

  /**
   *
   * @param {*} event
   */
  const updateAgeHandler = (event) => {};

  /**
   *
   */
  const addUserHandler = () => {};

  return (
    <form>
      <label class={styles.input.label}>Username</label>
      <input class={styles.input.input} onUpdate={updateUsernameHandler}></input>
      <label class={styles.input.label}>Age (Years)</label>
      <input class={styles.input.input} onUpdate={updateAgeHandler}></input>
      <Button onClick={addUserHandler}>Add User</Button>
    </form>
  );
}

export default AddUser;