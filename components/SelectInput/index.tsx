import React, { useEffect, useId, useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import styles from './SelectInput.module.css';

type SelectInputProps = {
  caption: string;
  onChange: (plan: string) => void;
  plan?: string;
};

const SelectInput = ({caption, onChange, plan}: SelectInputProps) => {
    const [value, setValue] = useState('Select Plan');
    const [dropDownVisible, setDropDownVisible] = useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (e: any) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(e.target) 
        ) {
          setDropDownVisible(false);
        }
      };

      document.addEventListener("mousedown", (e) => handleClickOutside(e));
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownRef]);

    const dropDownItems = [
      {
        id: useId(),
        text: "1 Month",
      },
      {
        id: useId(),
        text: "2 Months",
      },
      {
        id: useId(),
        text: "3 Months",
      },
      {
        id: useId(),
        text: "4 Months",
      },
      {
        id: useId(),
        text: "5 Months",
      },
      {
        id: useId(),
        text: "6 Months",
      },
      {
        id: useId(),
        text: "7 Months",
      },
      {
        id: useId(),
        text: "8 Months",
      },
      {
        id: useId(),
        text: "9 Months",
      },
      {
        id: useId(),
        text: "10 Months",
      },
      {
        id: useId(),
        text: "11 Months",
      },
      {
        id: useId(),
        text: "12 Months",
      },
    ];
  return (
    <div className={styles["container"]}>
      <p>{caption}</p>
      <div
        className={styles["inputWrapper"]}
        onClick={() => setDropDownVisible(!dropDownVisible)}
        ref={dropdownRef}
      >
        <p>{value !== "Select Plan" || !plan  ? value : plan}</p>
        {!dropDownVisible ? (
          <MdKeyboardArrowDown size={30} color={"#A9A9A9"} />
        ) : (
          <MdKeyboardArrowRight size={30} color={"#A9A9A9"} />
        )}
        {dropDownVisible && (
          <div className={styles["dropDown"]}>
            <ul>
              {dropDownItems.map(({ id, text }) => (
                <li
                  key={id}
                  onClick={() => {
                    onChange(text);
                    setValue(text);
                    setDropDownVisible(false);
                  }}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectInput