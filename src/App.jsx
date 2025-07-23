import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import LogisticsStatistics from "./components/Statistic";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import Question from "./components/Question";
import About from "./components/About";
import News from "./components/News";
import NewsAbout from "./pages/NewsAbout";
import ArticlePage from "./pages/ArticlePage";
import BlogPage from "./pages/BlogPage";
import FilialPage from "./pages/FilialPage";
import ProgramPage from "./pages/ProgramPage";
import AboutPage from "./pages/AboutPage";
import ProgramAboutPage from "./pages/ProgramAboutPage";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <LogisticsStatistics />
              <About />
              <Section />
              <Question />
              <News />
            </>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/news/:id" element={<NewsAbout />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/filial" element={<FilialPage />} />
        <Route path="/program/:id" element={<ProgramPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/program/about/:id" element={<ProgramAboutPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;