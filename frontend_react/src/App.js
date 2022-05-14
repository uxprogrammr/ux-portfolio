import React from "react";

import {
  About,
  Header,
  Footer,
  Skills,
  Testimonials,
  Works,
} from "./containers";

import { NavBar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
