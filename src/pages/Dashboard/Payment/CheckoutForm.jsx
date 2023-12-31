import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import './CheckoutFrom.css'

const CheckoutForm = ({ price, booking }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext)
    const [cardError, setCardError] = useState('')
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');


    useEffect(() => {
        // console.log(price)
        if (price > 0) {
            axiosSecure.post("/create-payment-intent", { price })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('error', error);
            setCardError(error.message)
        } else {
            setCardError('')
            // console.log('PaymentMethod', paymentMethod);
        }
        setProcessing(true)



        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError)
        }

        // console.log('paymentIntent', paymentIntent)
        setProcessing(false)

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)

            // save payment information
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                image : booking.image,
                instructorName: booking.instructor,
                date: new Date(),
                cartItems: booking._id,
                classBooking: booking.classId,
                orderStatus: 'Booking pending',
                itemName: booking.name
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    // console.log(res.data)
                    
                    if (res.data.insertResult.acknowledged) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your booking has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

    };

    return (
        <>
            <form className="m-0" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>Pay</button>
            </form>
            {
                cardError && <p className="text-error mt-4">{cardError}</p>
            }
            {
                transactionId && <p className="text-success mt-4">Transaction Complete: {transactionId}</p>
            }
        </>
    );
};

export default CheckoutForm;