import Home from "./Component/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Component/About";
import AboutTheApp from "./Component/AboutTheApp";
import AboutAuthor from "./Component/AboutAuthor";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/about/about-app" exact element={<AboutTheApp />} />
      <Route path="/about/about-author" exact element={<AboutAuthor />} />
    </Routes>
  );
}

export default App;
