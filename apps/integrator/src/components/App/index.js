import * as React from "react";
import Feature from "../Feature";

import Hero from "hero/Hero";

function App() {
  return (
    <main>
      <Hero />
      <Feature
        src="http://localhost:4002/remote.js"
        lib="offers"
        mod="./Offers"
      />
    </main>
  );
}

export default App;
