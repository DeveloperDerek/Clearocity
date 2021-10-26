import React, { useState } from 'react'
import { navigate } from "@reach/router";
import { CardElement, useElements, useStripe, PaymentElement } from "@stripe/react-stripe-js"
import axios from "axios"

const cardStyle = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#32325d"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  }
};

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [processing, setProcessing] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
    if(!error) {
        try {
            setProcessing(true);
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:9000/api/order/create-payment-intent", {
                id
            }, { withCredentials:true })

            if(response.data.success) {
              navigate("/")
            }
        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <div className="checkout-form">
          <form id="payment-form" onSubmit={handleSubmit}>
              <PaymentElement id="card-element" options={cardStyle}/>
              <button id="submit">
                <span id="button-text">
                  {processing ? (
                    <div className="spinner" id="spinner"></div>
                  ) : (
                    "Pay now"
                  )}
                </span>
              </button>
          </form>
        </div>
    )
}

export default CheckoutForm