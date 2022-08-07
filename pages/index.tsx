import React, { useId, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import ProgressCircle from "../components/ProgressCircle";
import HouseStatus from "../components/HouseStatus";
import InputElement from "../components/InputElement";
import SelectInput from "../components/SelectInput";
import Button from "../components/Button";
import { submitRequest } from "../store/actionCreators/submitRequest";
import { useAppDispatch, useAppSelector } from "../hooks/reduxhooks";
import { createError, payment } from "../store/slices/paymentSlice";
import PageLayout from "../Layouts/PageLayout";

const Home = () => {
  const [isActive, setIsActive] = useState("");
  const [isStatusClicked, setIsStatusClicked] = useState(0);
  const [progress, setProgress] = useState(3);
  const [isrequseted, setIsrequested] = useState(false);
  const [progressState, setProgressState] = useState(0);
  const [isPlanned, setIsPlanned] = useState(false);
  const [form, setForm] = useState({
    status: null,
    monthly: null,
    request: null,
    plan: null,
  });
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(payment);

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
    },
  ];

  const handleStatusClick = (id: string, status: string) => {
    setIsActive(id);
    setForm({ ...form, status });
    if (!isStatusClicked) {
      setProgress((progress) => progress - 1);
      setProgressState((progressState) => progressState + 1);
      setIsStatusClicked(1);
    }
  };

  const onChangeInput = (e, name) => {
    const reg = /^-?\d*\.?\d*$/;
    const prevInput = form[name];
    if(e.target.value.match(reg)){
      setForm({ ...form, [name]: e.target.value });
    }else{
      e.target.value = prevInput;
    }
    if (form.request && form.monthly && !isrequseted) {
      setProgress((progress) => progress - 1);
      setProgressState((progressState) => progressState + 1);
      setIsrequested(true);
    }
  };

  const updateMonthly = (plan) => {
    setForm({ ...form, plan });
    if (!isPlanned) {
      setProgress((progress) => progress - 1);
      setProgressState((progressState) => progressState + 1);
      setIsPlanned(true);
    }
  };

  const submitForm = () => {
    if(form.request <= 0 || form.monthly <= 0) {
      dispatch(createError({error: "Please enter a valid rent amount"}));
      return;
    }
    if (form.status && form.monthly && form.request && form.plan) {
      dispatch(
        submitRequest(form, () => {
          setTimeout(() => {
            router.push("/pre-approval");
          }, 3500);
        })
      );
    }
  };

  return (
    <PageLayout>
      <div className={styles["form"]}>
        <div className={styles["form__header"]}>
          <h3>Payment Option</h3>
          <div className={styles["progress"]}>
            <span>{progressState} of 3</span>
            <ProgressCircle percentage={progress} />
          </div>
        </div>
        <div className={styles["form__body"]}>
          <div className={styles["form__body_status"]}>
            <p>What is you accomodation status?</p>
            {statuses.map(({ text, id }) => (
              <HouseStatus
                key={id}
                text={text}
                id={id}
                active={isActive}
                onClick={handleStatusClick}
              />
            ))}
          </div>
          <div className={styles["form__body_payment"]}>
            <InputElement
              onChange={onChangeInput}
              caption="How much is your request rent?"
              name="request"
              form={form}
            />
            <InputElement
              onChange={onChangeInput}
              caption="How much do you earn monthly?"
              name="monthly"
              form={form}
            />
            <SelectInput
              onChange={updateMonthly}
              caption="Choose a monthly plan"
            />
            <Button
              onclick={submitForm}
              variant="green"
              text={loading ? "loading..." : "next"}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
