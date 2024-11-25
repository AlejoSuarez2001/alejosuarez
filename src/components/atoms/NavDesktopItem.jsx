import { useTheme } from "../../contexts/ThemeContext";

export default function NavDesktopItem({ name, onClick }) {
  const { theme } = useTheme();

  return (
    <>
      <div
        onClick={onClick}
        className={`navitem_${theme} text_${theme} language py-2 px-3 mx-1 text-center`}
      >
        {name}
      </div>
    </>
  );
}
