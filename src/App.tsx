import { useState } from "react";

import { Hero } from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";

function App() {

  return (
    <div>
      <Hero />
      <Services />
      <Products />
    </div>
  );
}

export default App;
