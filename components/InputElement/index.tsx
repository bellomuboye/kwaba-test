import React from "react";
import styles from "./InputElement.module.css";

type InputElementProps = {
  name: string;
  caption: string;
  onChange: (e: React.ChangeEvent, name?: string) => void;
  customStyle?: boolean;
  value?: string;
  form?: any;
};

const InputElement = ({
  name,
  caption,
  onChange,
  customStyle,
  value,
  form,
}: InputElementProps) => {
  return (
    <div className={styles["container"]}>
      <p>{caption}</p>
      <div className={styles["inputWrapper"]}>
        <input
          className={`${styles["formInput"]} ${
            customStyle ? styles["shadow"] : ""
          }`}
          id={name}
          type={"text"}
          onChange={(e) => {
            onChange(e, name);
          }}
          required
          value={form?.name == name ? form.name : value}
        />
        <label className={styles["formLabel"]} htmlFor={name}>
          Amount
        </label>
      </div>
    </div>
  );
};

export default InputElement;
