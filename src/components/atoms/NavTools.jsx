import { useTheme } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { FiMoon, FiSun } from "react-icons/fi";

export default function NavTools() {
  const { theme, handleTheme, handleLanguage } = useTheme();
  const { i18n } = useTranslation();

  function changeIcon(tool) {
    const tools = document.querySelectorAll(`.nav_tools_${tool}`);
    tools.forEach((tool) => {
      tool.style.opacity = "0";
    });
    setTimeout(() => {
      tools.forEach((tool) => {
        tool.style.opacity = "1";
      });
    }, 200);
  }

  return (
    <div
      className={`background_secondary_${theme} nav_tools_container rounded-2 align-items-center justify-content-around d-flex me-3 mb-lg-3 py-2 px-1`}
    >
      <span
        onClick={() => {
          handleTheme(), changeIcon("theme");
        }}
        className={`text_${theme} nav_tools_thememode`}
      >
        {theme == "light" ? <FiSun /> : <FiMoon />}
      </span>
      <button
        onClick={() => {
          handleLanguage(), changeIcon("language");
        }}
        className={`text_${theme} nav_tools_language`}
      >
        {i18n.language == "es" ? "ES" : "EN"}
      </button>
    </div>
  );
}
