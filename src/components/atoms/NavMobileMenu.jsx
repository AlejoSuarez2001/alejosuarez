import { useTheme } from "../../contexts/ThemeContext";

export default function NavMobileMenu({ menuOpen, setMenuOpen }) {
  const { theme } = useTheme();
  return (
    <i
      onClick={() => (menuOpen ? setMenuOpen(false) : setMenuOpen(true))}
      className={`text_${theme} nav_icon bi bi-list`}
    ></i>
  );
}
