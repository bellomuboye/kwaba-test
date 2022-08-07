import React, { useState } from 'react'
import styles from './HouseStatus.module.css'

type HouseStatusProps = {
    id: string;
    text: string;
    active: string | undefined;
    onClick: (id: string, text: string) => void;
}

const HouseStatus = ({id, text, active,onClick}: HouseStatusProps) => {
  return (
    <div 
    className={`${styles['container']} ${active && active === id ? styles['active'] : ''}`}
    onClick={() => onClick(id, text)}
    >
        {text}
    </div>
  )
}

export default HouseStatus