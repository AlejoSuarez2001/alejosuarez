import { LuCalendar } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/ThemeContext";
import "../../styles/blog.css";

const FALLBACK_IMAGE = "/assets/images/bannerDev.webp";

export default function Article({ article }) {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const articleImage =
    article.cover_image || article.social_image || FALLBACK_IMAGE;

  return (
    <article className={`article-card-${theme} h-100`}>
      <div className="article-image-wrapper">
        <img
          src={articleImage}
          alt={article.title}
          className="article-image"
        />

        {article.tag_list?.[0] && (
          <span className="article-tag">{article.tag_list[0]}</span>
        )}
      </div>

      <div className="article-body">
        <div className={`text_${theme} article-date`}>
          <LuCalendar size={16} />
          <span>
            {new Date(article.published_at).toLocaleDateString("es-AR", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>

        <h3 className={`text_${theme} article-title`}>
          <a href={article.url} target="_blank" rel="noreferrer">
            {article.title}
          </a>
        </h3>

        <p className={`text_${theme} article-description`}>{article.description}</p>

        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
          className="article-link mt-auto"
        >
          {t("blog.boton")} →
        </a>
      </div>
    </article>
  );
}
