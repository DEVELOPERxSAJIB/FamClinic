import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Treatment from "./pages/Treatment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/treatment" element={<Treatment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
