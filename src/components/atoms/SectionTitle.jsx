import { useTheme } from "../../contexts/ThemeContext";
import "../../styles/extras.css";

export default function SectionTitle({ title, icon = null }) {
  const { theme } = useTheme();
  return (
    <div
      className="d-flex flex-row justify-content-start align-items-center"
      style={{ marginBottom: "50px" }}
    >
      <div className="d-none d-md-block">{icon}</div>
      <h2
        className={`text_${theme} language section_title pt-3 ms-0 ms-md-4 ms-lg-5`}
        style={{ lineHeight: 1.5 }}
      >
        {title}
      </h2>
    </div>
  );
}
