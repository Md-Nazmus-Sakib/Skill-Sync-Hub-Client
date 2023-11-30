import React from 'react';
import moment from 'moment';
import Pdf from "react-to-pdf";

const MyOrderModal = ({ myOrder }) => {
    const { title, date, email, name, price, teacherEmail, transactionId } = myOrder;
    // const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    // const handelPdf=()=>{
    //     toPDF()
    // }
    const ref = React.createRef();
    
    return (
       <dialog id='my_modal_3' className='modal'>
         <Pdf targetRef={ref} filename="code-example.pdf">
               {({ toPdf }) => <button onClick={toPdf} className='bg-blue-500 p-3 text-white rounded-xl mt-5'>Generate Pdf</button>}
             </Pdf>
        <div ref={ref}>
            <h2>Hello</h2>
        </div>
        <button onClick={() =>handelPdf() }className='btn btn-primary'>Download</button>
       </dialog>
    );
};

export default MyOrderModal;

// courseId
// :
// "65633509e3609633b018568a"
// date
// :
// "2023-11-26T18:33:00.747Z"
// email
// :
// "tom@asd.com"
// name
// :
// "tom"
// photo
// :
// "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/303100/303157.jpg"
// price
// :
// 3455
// teacherEmail
// :
// "asdf@asdf.com"
// title
// :
// "Programmer for bigineer"
// transactionId
// :
// "pi_3OGn8DCAxLqpNDm10pHVJ4YS"
// _id
// :
// "65638f5c3b6b0de414bb6b71"


// mport React from 'react';
// import { useLoaderData } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// import Pdf from "react-to-pdf";

// const ref = React.createRef();

// const Category = () => {
//     const course = useLoaderData();
//     const { title, picture, description, details, language, cordinator, id } = course;
//     return (
//         <div>
           
//            <div className='flex justify-center'>
//            <Pdf targetRef={ref} filename="code-example.pdf">
//                 {({ toPdf }) => <button onClick={toPdf} className='bg-blue-500 p-3 text-white rounded-xl mt-5'>Generate Pdf</button>}
//             </Pdf>
//            </div>
//             <div ref={ref} className="card card-compact my-10 md:w-2/3 mx-auto bg-base-100 shadow-xl">
//                 <figure><img src={picture} alt="Shoes" /></figure>
//                 <div className="card-body">
//                     <h2 className="card-title text-2xl">{title}</h2>
//                     <div>
//                         <p> CourseTeacher :{cordinator}</p>
//                         <p>Language Of the Course :{language}</p>
//                     </div>
//                     <p>{description}</p>
//                     <div >
//                         <p>{details}</p>
//                     </div>
//                     <Link to={`/category/checkout/${id}`}><button className="btn btn-wide">Premium Access to Get Offer</button></Link>
//                 </div>
//             </div>
//         </div>
//     );
// };



// <div className="">

// <div className='text-[#1c1818] bg-[#FFFF]' id="invoiceContent" ref={targetRef}>
//     <h1 className='text-5xl font-extrabold text-center'>{name} Invoice Bill</h1>
//     <hr />
//     <div className='flex justify-between'>
//         <h1>Course Name:</h1>
//         <h2>{title}</h2>
//     </div>
//     <hr />
//     <div className='flex justify-between'>
//         <h1>Student Name:</h1>
//         <h2>{name}</h2>
//     </div>
//     <hr />
//     <div className='flex justify-between'>
//         <h1>Student Email:</h1>
//         <h2>{email}</h2>
//     </div>
//     <hr />
//     <div className='flex justify-between'>
//         <h1>Teacher Email:</h1>
//         <h2>{teacherEmail}</h2>
//     </div>
//     <hr />
//     <div className='flex justify-between'>
//         <h1>Total Price:</h1>
//         <h2>$ {price}</h2>
//     </div>
//     <hr />
//     <div className='flex justify-between'>
//         <h1>Transaction Id:</h1>
//         <h2> {transactionId}</h2>
//     </div>
//     <hr />
//     <div className='flex justify-between'>
//         <h1>Transaction Date:</h1>
//         <h2> {moment(date).format('MMMM Do YYYY, h:mm')}</h2>
//     </div>
//     <hr />
//     <br />
//     <br />
//     <div className='flex justify-between'>
//         <h1>Total Amount:</h1>
//         <h2>$ {price}</h2>
//     </div>
// </div>

// <button onClick={() =>handelPdf() }className='btn btn-primary'>Download</button>

// <button onClick={() => document.getElementById('my_modal_3').close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
// </div>