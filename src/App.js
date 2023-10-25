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



function App() {
  return (
    <div className='mx-5 my-5 text-center'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Route for /courses and /about */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
