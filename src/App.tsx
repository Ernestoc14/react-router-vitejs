import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="" element={} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
