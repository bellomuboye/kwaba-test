import React from 'react'
import styles from './ProgressCircle.module.css'

type ProgressCircleProp = {
    percentage: number
}

const ProgressCircle = ({percentage}: ProgressCircleProp) => {


  return (
    <div className={styles["container"]}>
      <div className={styles["percentage"]}>
        <svg>
          <circle cx="20" cy="20" r="20"></circle>
          <circle style={{strokeDashoffset: 42 * percentage}} cx="20" cy="20" r="20"></circle>
        </svg>
      </div>
    </div>
  );
}

export default ProgressCircle