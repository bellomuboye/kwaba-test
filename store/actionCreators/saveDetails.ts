import axios from "axios";
import {
  submitDetailsLoading,
  submitDetailsSuccess,
  submitDetailsFailed,
} from "../slices/paymentSlice";

export const submitDetails = (form, callback) => {
  return async (dispatch) => {
    dispatch(submitDetailsLoading());
    try {
      const response = await axios.post("/api/save-details", form);
      const {
        message,
        data: {
          accomodationStatus,
          rentAmount,
          monthlyEarning,
          monthlyPayment,
          monthlyPlan,
        },
      } = response.data;
      dispatch(
        submitDetailsSuccess({
          message,
          accomodationStatus,
          rentAmount,
          monthlyEarning,
          monthlyPayment,
          monthlyPlan,
        })
      );
      callback();
    } catch (error) {
      dispatch(submitDetailsFailed(error.response.data.message));
    }
  };
};
