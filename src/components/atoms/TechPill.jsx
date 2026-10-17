import { useTheme } from "../../contexts/ThemeContext";
import { technologies } from "../../config/technologies";

export default function TechPill({ tag }) {
  const { theme } = useTheme();
  const tech = technologies[tag];

  return (
    <div
      className={`background_secondary_${theme} d-flex align-items-center gap-2 rounded-2 px-2 py-1`}
    >
      {tech && <img width="18" height="18" src={tech.img} alt="" />}
      <span className={`text_${theme} case_pill_name`}>
        {tech ? tech.name : tag}
      </span>
    </div>
  );
}
