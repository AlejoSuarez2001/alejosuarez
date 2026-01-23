import { ThemeContextProvider } from "./contexts/ThemeContext";
import Nav from "./components/organisms/Nav";
import AbouteMe from "./components/organisms/AboutMe";
import Blog from "./components/organisms/Blog";
import Experience from "./components/organisms/Experience";
import Projects from "./components/organisms/Projects";
import Certifications from "./components/organisms/Certifications";
import Stack from "./components/organisms/Stack";
import Footer from "./components/organisms/Footer";
import { ScrollContextProvider } from "./contexts/ScrollContext";
import ToTopArrow from "./components/atoms/ToTopArrow";
import "./styles/app.css";

function App() {
  return (
    <ThemeContextProvider>
      <ScrollContextProvider>
        <Nav />
        <AbouteMe />
        <Experience />
        <Projects />
        <Certifications />
        <Stack />
        <Blog />
        <Footer />
        <ToTopArrow />
      </ScrollContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
