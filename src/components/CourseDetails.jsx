import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const CourseDetails = ({ courseList }) => {
  // use useParams hook to get the parameter from 
  // the path that was used to access this component
  const { courseId } = useParams();

  //use the useNavigate hook to create a navigate function
  //which can be used to direct/redirect users to other
  //parts of your app
  const navigate = useNavigate();

  //run the filter method on courseList, which is an array of course objects
  //keep only the course whose id matches the courseId parameter
  //this will return an array of one single course, so we use [0] to 
  //access that item, and then we store that course as a variable
  const course = courseList.filter(course => course.id == courseId)[0]

  //need a handleEnroll function to handle the various steps 
  //when clicking the Enroll button
  const handleEnroll = () => {
    //{Actual enrollment logic here}//

    //alert the user that they have enrolled
    alert(`Congrats! You are enrolled in ${course.name}!`);

    //redirect to the /courses page, effectively removing the course details
    //from the screen
    navigate("/courses");

    //if you want to delay the navigate:
    // setTimeout(() => {
    //   navigate("/courses")}, 
    //   5000
    // );
  }
  return (
    <div>
      <h3>Course Details</h3>

      <h4>Course ID: {course.id}</h4>
      <h4>Course Name: {course.name}</h4>
      <h4>Course Description: {course.description}</h4>

      {/* create an Enroll button that, when clicked, alerts the 
      user that they have enrolled in the course and then redirects back to
      just the courses page */}

      <button onClick={handleEnroll}>Enroll</button>
    </div>
  )
}

export default CourseDetails;