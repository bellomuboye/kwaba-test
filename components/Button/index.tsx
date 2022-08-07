import React from 'react'
import styles from './Button.module.css'

enum ButtonVariants {
  green = "green",
  purple = "purple",
}

type ButtonProps = {
  variant: keyof typeof ButtonVariants;
  text: string;
  onclick: () => void;
};

const Button = ({variant, text, onclick}: ButtonProps) => {
  return (
    <button 
    className={`${styles['button']} ${styles[variant]}`}
    onClick={onclick}
    >
        {text}
    </button>
  )
}

export default Button