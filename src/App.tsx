import { useState } from "react";

import { Hero } from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import { Reference } from "./components/Reference";
import Care from "./components/Care";

function App() {

  return (
    <div>
      <Hero />
      <Services />
      <Products />
      <Reference />
      <Care />
    </div>
  );
}

export default App;
