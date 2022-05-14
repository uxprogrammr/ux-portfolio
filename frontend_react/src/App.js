import React from "react";

import {
  About,
  Header,
  Footer,
  Skills,
  Testimonials,
  Works,
} from "./containers";

const App = () => {
  return (
    <div className="app">
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
