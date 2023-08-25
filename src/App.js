import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Services from "./components/Servicese/Services";
import Project from "./components/Project/Project";
import Location from "./components/Location/Location";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CarouselImg from "./components/Carousel/CarouselImg";
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Section />
      <Services />
      <Project />
      <Location />
      <CarouselImg />
      <Footer />
    </div>
  );
};

export default App;
