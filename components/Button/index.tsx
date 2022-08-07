import React from 'react'
import styles from './Button.module.css'

enum ButtonVariants {
  green = "green",
  purple = "purple",
}

type ButtonProps = {
  variant: keyof typeof ButtonVariants;
  text: string;
};

const Button = ({variant, text}: ButtonProps) => {
  return (
    <button 
    className={`${styles['button']} ${styles[variant]}`}
    type="submit"
    >
        {text}
    </button>
  )
}

export default Button