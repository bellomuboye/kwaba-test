import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../hooks/reduxhooks';
import { clearMessage } from '../../store/slices/paymentSlice'
import classes from './Toast.module.css'

type ToastProps = {
    message: string;
    success?: boolean;
    danger?: boolean;
}

const Toast = ({message, success, danger}: ToastProps) => {

    const [showToast, setShowToast] = useState(true)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!danger) {
            setTimeout(() => {
                setShowToast(false);
                dispatch(clearMessage())
            }, 3000)
        }else {
            setTimeout(() => {
                setShowToast(false);
                dispatch(clearMessage())
            }, 5000)
        }
    }, [])

    let toastType;
    if (success) {
        toastType = 'success'
    }
    if (danger) {
        toastType = 'danger'
    }


  return (
      <div className={`${classes.toast} ${classes[toastType]} ${showToast ? '' : classes.hide__toast}`}>
        <p>{message}</p>
    </div>
  )
}

export default Toast