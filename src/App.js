import './App.css';
import Navbar from './components/Navbar'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signup from './components/SignUp';
import BlogState from './context/Blogs/BlogState.js';
import Personalinfo from './components/Personalinfo';
import Blog from './components/Blog';
import AddBlog from './components/AddBlog';
import Home from './components/Home';
import DateBar from './components/DateBar';


function App() {
  return (
    <>
        <BlogState>

    <Router>
    <Navbar/>
    <DateBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Account' element={<Personalinfo/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/AddBlog' element={<AddBlog/>}/>
      </Routes>
    </Router>
    </BlogState>
    </>
  );
}

export default App;
