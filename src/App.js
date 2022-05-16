import React from 'react';
import Navbar from './components/Navbar'
import Main from './components/main/Main'
import About from './components/about/About'
import Vlogging from './components/vlogging/Vlogging'
import Blog from './components/blog/Blog'
import HowItWorks from './components/howItWorks/HowItWorks'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Vlogging />
      <Blog />
      <HowItWorks />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
