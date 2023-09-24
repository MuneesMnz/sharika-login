import React from "react";
import "../home.css";
import NavBar from "../components/navbar/nav";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import { Footer } from "../components/footer/Footer";
import Slider from "../components/slider/Slider";
const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Slider />
      <Footer />
    </>
  );
};
export default Home;
