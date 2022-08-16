import React from "react";
import Styles from "./Button.module.js";

function Button(props) {
    return (
        <button class={Styles.button}>{props.text}</button>
    );
}

export default Button;