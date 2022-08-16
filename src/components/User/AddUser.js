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
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  //   let isUsernameValid = false;
  //   let isAgeValid = false;
  //   let isFormEmpty = true;

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
    console.log(enteredUsername);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
    console.log(enteredAge);
  };

  /**
   *
   */
  const modalConfirmHandler = () => {
    setErrorMessage("");
  };

  /**
   *
   */
  const addUserHandler = (event) => {
    event.preventDefault();

    console.log(enteredUsername, enteredAge);

    let validationResult = "";
    let isUsernameEmpty = enteredUsername.trim().length === 0;
    let isAgeEmpty = enteredAge.trim().length === 0;
    // let isAgeNumeric = enteredAge.trim() == +enteredAge.trim();
    let isAgePositive = false; // checked later on

    if (isUsernameEmpty) validationResult += "Username cannot be empty.";

    if (isAgeEmpty) {
      validationResult += "\nAge cannot be empty.";
    } else {
      //   if (isAgeNumeric) {
      isAgePositive = +enteredAge.trim() > 0;
      if (!isAgePositive) {
        validationResult += "Age must be a positive number.";
      }
      //   } else {
      // validationResult += "\nAge must be a number.";
      //   }
    }

    if (validationResult.length > 0) {
      console.log(validationResult);
      setErrorMessage(validationResult);
    } else {
      props.onAddUser(enteredUsername, enteredAge);

      setEnteredUsername("");
      setEnteredAge("");
    }
  };

  return (
    <React.Fragment>
      {errorMessage !== "" && <ErrorModal
        title="Invalid Input"
        message={errorMessage}
        onConfirm={modalConfirmHandler}
      ></ErrorModal>}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label className={styles.input.label} htmlFor="username">
            Username
          </label>
          <input
            id="username"
            className={styles.input.input}
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          ></input>
          <label className={styles.input.label} htmlFor="age">
            Age (Years)
          </label>
          <input
            id="age"
            className={styles.input.input}
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
}

export default AddUser;
