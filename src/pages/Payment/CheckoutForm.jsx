import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const element = useElements();
  const handleSubmit = () => {
    console.log("submit");
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-primary"
        type="submit"
        // disabled={!stripe || !clientSecret || proccessing}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
