import React from "react";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import '../../pages/Payment/checkOutForm.css'

const Payment = () => {
   const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm></CheckoutForm>
    </Elements>
  );
};

export default Payment;
