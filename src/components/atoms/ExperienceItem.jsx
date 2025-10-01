import { useTheme } from "../../contexts/ThemeContext";

export default function ExperienceItem({
  title,
  subtitle,
  date,
  text,
  lastItem = false,
}) {
  const { theme } = useTheme();

  const highlightWord = (text) => {
    const words = ["Present", "Actualidad"];

    let modified = text;
    words.forEach((word) => {
      if (text.includes(word)) {
        modified = modified.replace(
          word,
          `<span style="color:#3ca58e">${word}</span>`
        );
      }
    });

    return modified;
  };

  return (
    <div className={`text_${theme} ${lastItem ? "" : "mb-5"} row`}>
      <div className="col-12 col-lg-5">
        <div className={`text_${theme} mb-2`}>
          <i className="experience_icon bi bi-circle-fill"></i>
          <h4 className="experience_title language">{title}</h4>
        </div>
        <div className={`text_${theme}`}>
          <h5 className="experience_subtitle language">{subtitle}</h5>
        </div>
        <div className={`text_${theme}`}>
          <h6
            className="experience_date language"
            dangerouslySetInnerHTML={{ __html: highlightWord(date) }}
          ></h6>
        </div>
      </div>
      <div className="col-12 col-lg-7">
        <p className="experience_text mb-0 language">{text}</p>
      </div>
    </div>
  );
}
