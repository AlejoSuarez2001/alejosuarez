import { useTheme } from "../../contexts/ThemeContext";
import { technologies } from "../../config/technologies";

export default function StackTechnologie({ tag }) {
  const { theme } = useTheme();

  return (
    <div className={`stack-tech-card-${theme} d-flex align-items-center gap-3 p-3 rounded-4`}>
      <img className="stack_img" src={technologies[tag].img} alt={technologies[tag].name} />
      <span className={`text_${theme} stack_tag_name`}>{technologies[tag].name}</span>
    </div>
  );
}
