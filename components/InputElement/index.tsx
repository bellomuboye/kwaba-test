import React from 'react'
import styles from './InputElement.module.css'

type InputElementProps = {
    name: string;
    caption: string;
}

const InputElement = ({name, caption, ...rest}: InputElementProps) => {
  return (
    <div className={styles["container"]}>
        <p>{caption}</p>
        <div className={styles["inputWrapper"]}>
            <input className={styles["formInput"]} id={name} type="text" {...rest} />
            <label className={styles["formLabel"]} htmlFor={name}>
                Amount
            </label>
        </div>
    </div>
  );
}

export default InputElement