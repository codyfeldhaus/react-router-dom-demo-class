import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Courses = ({ courseList }) => {
  return (
    <div>
      <h2>Available Courses</h2>
      <ul className='list-unstyled'>
        {/* map through courseList and display each 
        course's name inside of an li tag that has a key
        equal to the course's id */}
        {courseList.map((course) => (
          <li key={course.id}>
            <Link to={`${course.id}`}>{course.name}</Link>
          </li>
        ))}
      </ul>
      {/* Outlet component used to indicate where you want new
      stuff rendered based on nested routes that build off of
      this Courses component */}
      <Outlet />
    </div>
  )
}

export default Courses;