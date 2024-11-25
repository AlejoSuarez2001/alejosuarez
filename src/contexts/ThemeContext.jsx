import { useState, useContext, useEffect, createContext } from "react";
import { useTranslation } from "react-i18next";
import "../styles/theme.css";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("");
  const [validThemes, setValidThemes] = useState(["light", "dark", "system"]);
  const { i18n } = useTranslation();

  function handleTheme() {
    theme == "light"
      ? (setTheme("dark"), localStorage.setItem("theme", "dark"))
      : (setTheme("light"), localStorage.setItem("theme", "light"));
  }

  function handleLanguage() {
    const elements = document.querySelectorAll(
      `.language`
    );
    elements.forEach((element) => (element.style.opacity = "0"));
    setTimeout(() => {
      i18n.language === "en"
        ? i18n.changeLanguage("es")
        : i18n.changeLanguage("en");
      elements.forEach((element) => (element.style.opacity = "1"));
    }, 200);
  }

  useEffect(() => {
    validThemes.includes(localStorage.getItem("theme"))
      ? setTheme(localStorage.getItem("theme"))
      : setTheme("dark");
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, handleTheme, handleLanguage }}
    >
      <div className={`container_${theme} container_theme`}>{children}</div>
    </ThemeContext.Provider>
  );
}
