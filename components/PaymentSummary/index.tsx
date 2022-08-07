import React from 'react'
import styles from './PaymentSummary.module.css'

type PaymentSummaryProps = {
  rent: number;
  payable: number;
  plan: string;
}

const PaymentSummary = ({rent, payable, plan}: PaymentSummaryProps) => {
  return (
    <div className={styles["paymentSummary"]}>
      <p>Payment Option</p>
      <div className={styles["option__container"]}>
        <div className={styles["option__item"]}>
          <span className={styles["option__item_description"]}>
            Pre-approved amount
          </span>
          <span className={styles["option__item_value"]}>₦{rent}</span>
        </div>
        <div className={styles["option__item"]}>
          <span className={styles["option__item_description"]}>
            Monthly payment
          </span>
          <span className={styles["option__item_value"]}>₦{payable}</span>
        </div>
        <div className={styles["option__item"]}>
          <span className={styles["option__item_description"]}>Tenure</span>
          <span className={styles["option__item_value"]}>{plan}</span>
        </div>
      </div>
    </div>
  );
}

export default PaymentSummary