import React, { useId, useState } from 'react'
import Button from '../../components/Button'
import HouseStatus from '../../components/HouseStatus'
import InputElement from '../../components/InputElement'
import PaymentSummary from '../../components/PaymentSummary'
import ProgressCircle from '../../components/ProgressCircle'
import SelectInput from '../../components/SelectInput'
import styles from './components.module.css'

const components = () => {

  const [isActive, setIsActive] = useState('')

  const statuses = [
    {
      text: "Looking to renew my rent",
      id: useId(),
    },
    {
      text: "Want to pay for a new place",
      id: useId(),
    },
    {
      text: "I'm still searching",
      id: useId(),
    }
  ];

  const handleStatusClick = (id: string) => {
    setIsActive(id)
  }

  return (
    <div className={styles["container"]}>
      <Button variant="purple" text="next" />
      <br />
      <br />
      <InputElement
        name="rent"
        caption="How much is your rent request amount?"
      />
      <br />
      <br />
      {statuses.map(({ text, id }) => (
        <HouseStatus
          key={id}
          text={text}
          id={id}
          active={isActive}
          onClick={handleStatusClick}
        />
      ))}
      <br />
      <br />
      <SelectInput caption="Monthly Payment Plan" />
      <br />
      <br />
      <ProgressCircle percentage={0} />
      <br />
      <br />
      <PaymentSummary />
    </div>
  );
}

export default components