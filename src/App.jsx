import React from "react";
import Header from "./components/header/header";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
// import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";
// import Testimons from "./components/testimonials/testimon";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";
import Nav from "./components/Navbar/nav";
const App = () => {
  return (
    <>
      <Header />
      <Nav/>
      <About />
      <Experience />
    
      <Portfolio />
      
      <Contact />
      <Footer />
    </>
  );
};

export default App;
