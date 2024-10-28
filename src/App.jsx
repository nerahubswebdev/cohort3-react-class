import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Hero from "./components/hero/hero.jsx";
import About from "./components/about/about.jsx";

function App() {
  return (
    <div>
      {/* header section */}
      <Hero />
      <About />
    </div>
  );
}

export default App;
