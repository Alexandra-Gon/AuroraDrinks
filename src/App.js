import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import AboutPage from "./pages/AboutPage/AboutPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import DrinksPage from "./pages/DrinksPage/DrinksPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import { DrinksProvider } from "./Components/Context/drinksContext";

const App = () => {
  return (
    <DrinksProvider>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<DrinksPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/drink/:idDrink" element={<DetailPage />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </DrinksProvider>
  );
};

export default App;
