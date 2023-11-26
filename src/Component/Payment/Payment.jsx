import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import useSingleClass from '../../Hook/useSingleClass';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);
const Payment = () => {
    const { id } = useParams();
    const [singleCourse, loading, singleCourseRefetch] = useSingleClass(id);
    const { price } = singleCourse;
    // console.log(id)
    return (
        <div className='w-full'>

            <h1 className='text-5xl text-center my-12'>Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} singleCourse={singleCourse} />
            </Elements>
        </div>
    );
};

export default Payment;