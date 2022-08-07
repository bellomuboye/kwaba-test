import axios from 'axios';
import {
  submitrequestLoading,
  submitrequestSuccess,
  submitrequestFailed
} from "../slices/paymentSlice";

export const submitRequest = (form, callback) =>  {
    return async dispatch => {
        dispatch(submitrequestLoading());
        try {
            const response = await axios.post('/api/submit-request', form);
            const {message, data: {accomodationStatus, rentAmount, monthlyEarning, monthlyPayment, monthlyPlan}} = response.data
            dispatch(
              submitrequestSuccess({
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
            dispatch(submitrequestFailed(error.response.data.message));
        }
    }
}