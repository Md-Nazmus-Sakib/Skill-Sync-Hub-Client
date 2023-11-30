import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecret from '../../../Hook/useAxiosSecret';
import { useParams } from 'react-router-dom';
import Pdf from "react-to-pdf";
import { usePDF } from 'react-to-pdf';
import moment from 'moment';




const OrderDetails = () => {

    const axiosSecure = useAxiosSecret();
    const { id } = useParams();
    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
    // console.log(id)
    const { data: orderDetails = [] } = useQuery({
        queryKey: ['orderDetails'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/orderDetail/${id}`);
            return res.data;
        }
    })
    const { title, date, email, name, price, teacherEmail, transactionId } = orderDetails;
    return (
        <div>
            <div className="">

                {/* <div className='text-[#1c1818] bg-[#FFFF]' id="invoiceContent" ref={targetRef}> */}
                <div ref={targetRef}>
                    {/* Your content here */}
                    <h1 className='text-5xl font-extrabold text-center'>{name} Invoice Bill</h1>
                    <hr />
                    <div className='flex justify-between'>
                        <h1>Course Name:</h1>
                        <h2>{title}</h2>
                    </div>

                    <div className='flex justify-between'>
                        <h1>Total Amount:</h1>
                        <h2> {price}</h2>
                    </div>
                </div>

                <button onClick={() => toPDF()} className='btn btn-primary'>Download</button>


            </div>
        </div>
    );
};

export default OrderDetails;





// import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import useAxiosSecret from '../../../Hook/useAxiosSecret';
// import { useParams } from 'react-router-dom';
// import Pdf from "react-to-pdf";
// import { usePDF } from 'react-to-pdf';
// import moment from 'moment';

// const OrderDetails = () => {
//     const axiosSecure = useAxiosSecret();
//     const { id } = useParams();
//     const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
//     // console.log(id)
//     const { data: orderDetails = [] } = useQuery({
//         queryKey: ['orderDetails'],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/orderDetail/${id}`);
//             return res.data;
//         }
//     })
//     const { title, date, email, name, price, teacherEmail, transactionId } = orderDetails;
//     return (
//         <div>
//             <div className="">

//                 <div className='text-[#1c1818] bg-[#FFFF]' id="invoiceContent" ref={targetRef}>
//                     <h1 className='text-5xl font-extrabold text-center'>{name} Invoice Bill</h1>
//                     <hr />
//                     <div className='flex justify-between'>
//                         <h1>Course Name:</h1>
//                         <h2>{title}</h2>
//                     </div>
//                     <hr />
//                     <div className='flex justify-between'>
//                         <h1>Student Name:</h1>
//                         <h2>{name}</h2>
//                     </div>
//                     <hr />
//                     <div className='flex justify-between'>
//                         <h1>Student Email:</h1>
//                         <h2>{email}</h2>
//                     </div>
//                     <hr />
//                     <div className='flex justify-between'>
//                         <h1>Teacher Email:</h1>
//                         <h2>{teacherEmail}</h2>
//                     </div>
//                     <hr />
//                     <div className='flex justify-between'>
//                         <h1>Total Price:</h1>
//                         <h2>$ {price}</h2>
//                     </div>
//                     <hr />
//                     <div className='flex justify-between'>
//                         <h1>Transaction Id:</h1>
//                         <h2> {transactionId}</h2>
//                     </div>
//                     <hr />
//                     <div className='flex justify-between'>
//                         <h1>Transaction Date:</h1>
//                         <h2> {moment(date).format('MMMM Do YYYY, h:mm')}</h2>
//                     </div>
//                     <hr />
//                     <br />
//                     <br />
//                     <div className='flex justify-between'>
//                         <h1>Total Amount:</h1>
//                         <h2>$ {price}</h2>
//                     </div>
//                 </div>

//                 <button onClick={() => toPDF()} className='btn btn-primary'>Download</button>

//                 <button onClick={() => document.getElementById('my_modal_3').close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//             </div>
//         </div>
//     );
// };

// export default OrderDetails;