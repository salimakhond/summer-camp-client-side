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
        <div>
            <h3 className="uppercase font-semibold text-2xl ml-32">Payment</h3>

            <Elements stripe={stripePromise}>
                <CheckoutForm booking={booking} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;