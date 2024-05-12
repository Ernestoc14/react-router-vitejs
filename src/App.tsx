import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
