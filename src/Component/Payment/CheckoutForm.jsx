import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hook/useAuth';
import useAxiosSecret from '../../Hook/useAxiosSecret';
import Swal from 'sweetalert2';
import './CheckoutForm.css'
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ price, singleCourse }) => {

    const { _id, title, teacherEmail } = singleCourse;
    const navigate = useNavigate();
    const stripe = useStripe()
    const elements = useElements();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecret();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionID] = useState('');
    // console.log(price)
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })

                .then(res => {

                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [])
    // console.log(clientSecret, price)
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
        }
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'unknown'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError)
        }
        // console.log(paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionID(paymentIntent.id);

            const payment = {
                email: user?.email,
                title,
                courseId: _id,
                teacherEmail,
                transactionId: paymentIntent.id,
                price,
                date: new Date()
            }
            axiosSecure.post('/payment', payment)
                .then(res => {
                    // console.log(res.data);
                    if (res.data.insertedId) {
                        const studentInfo = {
                            email: user?.email,
                            name: user?.displayName,
                            photo: user?.photoURL,
                            title,
                            courseId: _id,
                            teacherEmail,
                            transactionId: paymentIntent.id,
                            price,
                            date: new Date(),
                            userStatus: 'Student'
                        }
                        axiosSecure.post('/student', studentInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    // console.log('student')


                                }
                            })

                    }
                })
            axiosSecure.patch(`/users/student/${user?.email}`)
                .then(res => {
                    // console.log(res.data)
                    if (res.data.modifiedCount > 0) {

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Payment Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                    navigate('/dashboard/enrollClass')
                })


        }
    }
    return (
        <div className='flex justify-center flex-col'>
            <form className='w-full sm:w-1/2' onSubmit={handleSubmit}>
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
                <button type="submit" className='btn btn-primary mt-6' disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                transactionId && <p className='text-white text-center'>Transaction completed with transaction Id :{transactionId}</p>
            }
        </div>
    );
};

export default CheckoutForm;