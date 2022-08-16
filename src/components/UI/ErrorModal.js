import React from "react";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

function ErrorModal(props) {
  const clickHandler = () => {
    props.onConfirm();
  };

  return (
    <React.Fragment>
      <div className={styles.backdrop} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={clickHandler}>Okay</Button>
        </footer>
      </Card>
    </React.Fragment>
  );
}

export default ErrorModal;
