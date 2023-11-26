import React from 'react';
import { useParams } from 'react-router-dom';
import useSingleClass from '../../../Hook/useSingleClass';

const CourseDetails = () => {
    const { id } = useParams();
    const [singleCourse, loading, singleCourseRefetch] = useSingleClass(id)
    const { _id, coursePhoto, title, details, price, teacherName, teacherPhoto, teacherEmail } = singleCourse;
    // console.log(singleCourse)
    return (
        <div>

        </div>
    );
};

export default CourseDetails;
