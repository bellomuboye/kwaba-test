import React from 'react'
import styles from './PaymentSummary.module.css'

const PaymentSummary = () => {
  return (
    <div className={styles["paymentSummary"]}>
      <p>Payment Option</p>
      <div className={styles["option__container"]}>
        <div className={styles["option__item"]}>
          <span className={styles["option__item_description"]}>
            Pre-approved amount
          </span>
          <span className={styles["option__item_value"]}>#200,000</span>
        </div>
        <div className={styles["option__item"]}>
          <span className={styles["option__item_description"]}>
            Monthly payment
          </span>
          <span className={styles["option__item_value"]}>#150,000</span>
        </div>
        <div className={styles["option__item"]}>
          <span className={styles["option__item_description"]}>
            Tenure
          </span>
          <span className={styles["option__item_value"]}>5 Months</span>
        </div>
      </div>
    </div>
  );
}

export default PaymentSummary