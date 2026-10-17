import { useTheme } from "../../contexts/ThemeContext";

export default function AICard({ icon, title, text, tags }) {
  const { theme } = useTheme();

  return (
    <div className={`ai-card-${theme} h-100 p-4`}>
      <div className="ai_card_icon mb-3">{icon}</div>
      <h3 className={`text_${theme} ai_card_title language`}>{title}</h3>
      <p className={`text_${theme} ai_card_text language`}>{text}</p>
      <div className="d-flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`background_secondary_${theme} text_${theme} ai_card_tag rounded-2`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
