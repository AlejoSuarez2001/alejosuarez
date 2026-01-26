import { useTheme } from "../../contexts/ThemeContext";
import { FiExternalLink, FiLock } from "react-icons/fi";
import Tag from "../atoms/Tag";
import "../../styles/projects.css";

export default function ProjectDescription({
  title,
  text,
  technologies,
  type,
  url,
}) {
  const { theme } = useTheme();

  return (
    <div className="p-0">
      <div className="col-12 d-flex justify-content-between align-items-center mb-2">
        
        <div className="d-flex align-items-center gap-2">
          <h2 className={`text_${theme} projects_card_title language mb-0`}>
            {title}
          </h2>

          {url !== "x" ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`projects_icon_link ${theme}`}
            >
              <FiExternalLink />
            </a>
          ) : (
            <FiLock className={`projects_icon_lock ${theme}`} />
          )}
        </div>

        <h3 className="projects_card_category text-center px-3 py-1 rounded-2">
          {type}
        </h3>
      </div>

      <p className={`text_${theme} projects_card_text language`}>{text}</p>

      <div className="d-flex mt-4 flex-wrap">
        {technologies.map((technologie, index) => (
          <Tag tag={technologie} key={index} />
        ))}
      </div>
    </div>
  );
}
