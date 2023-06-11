import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_TEST_PAYMENT_GATEWAY);

const Payment = () => {
    const booking = useLoaderData();
    const total = booking.price;
    const price = parseFloat(total.toFixed(2))

    return (
        <div className="w-[380px] pb-20 pt-10">
            <h3 className="font-semibold text-2xl text-center mb-10">Payment</h3>

            <Elements stripe={stripePromise}>
                <CheckoutForm booking={booking} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;