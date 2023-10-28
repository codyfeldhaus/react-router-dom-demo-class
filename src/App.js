import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Footer from './components/Footer';
import CourseDetails from './components/CourseDetails';


function App() {
  const courseList = [
    { 
        id: 1, 
        name: "HTML/CSS", 
        description: "Dive deep into the building blocks of the web. Learn how to structure, design, and style your website." 
    },
    { 
        id: 2, 
        name: "JavaScript Fundamentals", 
        description: "Grasp the core concepts of JavaScript, the powerful scripting language for web interactivity." 
    },
    { 
        id: 3, 
        name: "React Basics", 
        description: "Discover the world of React, a popular library for building dynamic user interfaces." 
    },
    { 
        id: 4, 
        name: "Advanced React", 
        description: "Master advanced patterns, state management, and performance optimizations in React applications." 
    }
  ]; 
  return (
    <div className='mx-5 my-5 text-center'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses courseList={courseList}/>}>
            {/* because this route is nested inside of the /courses route,
            this route is for paths like: /courses/1, /courses/2, etc. */}
            <Route path=":courseId" element={<CourseDetails courseList={courseList}/>} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
