import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Treatment from "./pages/Treatment";
import SingleTreatment from "./pages/SingleTreatment";
import GlobalPopup from "./components/GlobalPopup";
import Price from "./pages/Price";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Header />
        <GlobalPopup />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/treatment" element={<Treatment />} />
          <Route path="/treatment/:slug" element={<SingleTreatment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
