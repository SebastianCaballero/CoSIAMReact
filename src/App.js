import React from 'react'
import './App.css'
import Navbar from "./common/Navbar/Navbar";
import Home from "./components/pages/Home";
import About from "./components/About/About"
import Gallery from "./components/gallery/Gallery"
import Destinations from './components/Destinations/Home';
import SinglePage from './SinglePage/SinglePage';
import Blog from './components/Blog/Blog';
import BlogSingle from "./components/Blog/blog-single-page/BlogSingle"
import Testimonial from "./components/Testimonial/Testimonial"
import Contact from "./components/Contact/Contact"
import Login from "./components/login/Login"
import Register from "./components/login/Register"
import Footer from "./common/footer/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cosiam" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/noticias" element={<Destinations />} />
          <Route path="/singlepage/:id" element={<SinglePage />} />
          <Route path="/eventos" element={<Blog />} />
          <Route path="/blogsingle/:id" element={<BlogSingle />} />
          <Route path="/comunidad" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/sign-in' element={<Login />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App