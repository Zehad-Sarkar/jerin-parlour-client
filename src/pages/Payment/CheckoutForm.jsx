import React from "react";

const CheckoutForm = () => {
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
      {/* {cardError && <p>{cardError}</p>}
      {transactionId && (
        <p>Transaction completed with transactionId: {transactionId}</p>
      )} */}
    </form>
  );
};

export default CheckoutForm;
