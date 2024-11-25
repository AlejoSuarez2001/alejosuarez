import { useTheme } from "../../contexts/ThemeContext";

export default function NavMobileItem({ name, onClick }) {
  const { theme } = useTheme();

  return (
    <div onClick={onClick}>
      <p className={`navitem_${theme} text_${theme} language p-3 m-0`}>
        {name}
      </p>
    </div>
  );
}
