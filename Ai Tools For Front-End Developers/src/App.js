import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function Homepage(){
  return(
    <>
    <Hero/>
    <Features/>
    <Testimonials/>
    </>
  )
}

function App() {
  return (
    <>
    <Navbar/>
     <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
