import React from "react";
import { Navbar } from "./components/export";
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
} from "./container/index";
import "./App.scss";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Testimonial />
      <Work />
      <Footer />
    </div>
  );
};

export default App;
