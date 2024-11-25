import { useTheme } from "../../contexts/ThemeContext";

export default function NavHeader({ onClick }) {
  const { theme } = useTheme();

  return (
    <header
      onClick={onClick}
      className={`text_${theme} col-7 col-sm-5 col-lg-2 col-xl-3 col-xxl-4 col p-0 m-0 row justify-content-start`}
      style={{cursor: "pointer"}}
    >
      <div className="nav_logo col-12 py-2 px-0">Alejo Suarez</div>
    </header>
  );
}
