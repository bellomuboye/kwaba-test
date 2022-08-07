import {createSlice, current} from '@reduxjs/toolkit';
import { RootState } from '..';

const initialState = {
  loading: false,
  accomodationStatus: "",
  rentAmount: null,
  monthlyEarning: 0,
  monthlyPlan: null,
  monthlyPayment: null,
  message: null,
  error: null,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    submitrequestLoading: (state) => {
      state.loading = true;
    },
    submitrequestSuccess: (state, { payload }) => {
      state.loading = false;
      state.accomodationStatus = payload.accomodationStatus;
      state.rentAmount = payload.rentAmount;
      state.monthlyEarning = payload.monthlyEarning;
      state.monthlyPlan = payload.monthlyPlan;
      state.monthlyPayment = payload.monthlyPayment;
      state.message = payload.message;
    },
    submitrequestFailed: (state, { payload }) => {
      state.loading = false;
      state.error = payload.error;
    },
    clearMessage: (state) => {
      state.message = null;
      state.error = null;
    },
    changeRentAmount: (state, { payload }) => {
      state.rentAmount = payload.rentAmount
        .split("")
        .filter((item) => item !== ",")
        .join("");
      state.rentAmount = state.rentAmount
        .split("")
        .filter((item) => item !== "₦")
        .join("");
      state.monthlyPayment =
        parseInt(state.rentAmount) / parseInt(state.monthlyPlan.split(" ")[0]) +
        parseInt(state.rentAmount) * 0.02;
    },
    changeMonthlyPlan: (state, { payload }) => {
      state.monthlyPlan = payload.monthlyPlan;
      state.monthlyPayment =
        parseInt(state.rentAmount) / parseInt(state.monthlyPlan.split(" ")[0]) +
        parseInt(state.rentAmount) * 0.02;
    },
    submitDetailsLoading: (state) => {
      state.loading = true;
    },
    submitDetailsSuccess: (state, { payload }) => {
      state.loading = false;
      state.accomodationStatus = payload.accomodationStatus;
      state.rentAmount = payload.rentAmount;
      state.monthlyEarning = payload.monthlyEarning;
      state.monthlyPlan = payload.monthlyPlan;
      state.monthlyPayment = payload.monthlyPayment;
      state.message = payload.message;
    },
    submitDetailsFailed: (state, { payload }) => {
      state.loading = false;
      state.error = payload.error;
    },
    createError: (state, { payload }) => {
        state.error = payload.error;
    }
  },
});

export const payment = (state: RootState) => state.payment;

export const {submitrequestLoading, submitrequestSuccess, submitrequestFailed, clearMessage, changeRentAmount, changeMonthlyPlan, submitDetailsFailed, submitDetailsLoading, submitDetailsSuccess, createError} = paymentSlice.actions;

export default paymentSlice.reducer;