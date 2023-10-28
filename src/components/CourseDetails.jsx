import React from 'react'
import { useParams } from 'react-router-dom';

const CourseDetails = ({ courseList }) => {
  // use useParams hook to get the parameter from 
  // the path that was used to access this component
  const { courseId } = useParams();
  //run the filter method on courseList, which is an array of course objects
  //keep only the course whose id matches the courseId parameter
  //this will return an array of one single course, so we use [0] to 
  //access that item, and then we store that course as a variable
  const course = courseList.filter(course => course.id == courseId)[0]
  return (
    <div>
      <h3>Course Details</h3>

      <h4>Course ID: {course.id}</h4>
      <h4>Course Name: {course.name}</h4>
      <h4>Course Description: {course.description}</h4>
    </div>
  )
}

export default CourseDetails;