import { useTranslation } from "react-i18next";
import { FiExternalLink } from "react-icons/fi";
import { useTheme } from "../../contexts/ThemeContext";
import LoopVideo from "../atoms/LoopVideo";
import TechPill from "../atoms/TechPill";

export default function CaseCard({ id, number, accent, media, stack, site }) {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <article className="case_row py-5" style={{ "--case-accent": accent }}>
      <div className="row align-items-center gx-lg-5 gy-4 m-0">
        <div className="col-12 col-lg-5 order-2 order-lg-1 ps-lg-0">
          <p className="case_meta language mb-3">
            <span className="case_number">{number}</span>
            <span className="mx-2">—</span>
            {t(`projects.items.${id}.client`)}
            <span className="mx-2">·</span>
            {t(`projects.items.${id}.kind`)}
          </p>
          <h3 className={`text_${theme} case_title language`}>
            {t(`projects.items.${id}.title`)}
          </h3>
          <p className={`text_${theme} case_tagline language`}>
            {t(`projects.items.${id}.tagline`)}
          </p>
          {site && (
            <a
              href={site}
              target="_blank"
              rel="noopener noreferrer"
              className="case_link language mt-4"
            >
              {t("projects.site")}
              <FiExternalLink />
            </a>
          )}
        </div>

        <div className="col-12 col-lg-7 order-1 order-lg-2 pe-lg-0">
          <div className="case_media">
            <LoopVideo
              media={media}
              label={t(`projects.items.${id}.title`)}
              className="case_video"
            />
          </div>
        </div>
      </div>

      <div className="row gx-lg-5 gy-4 m-0 mt-2 mt-lg-4">
        <div className="col-12 col-lg-5 ps-lg-0">
          <p className={`text_${theme} case_description language`}>
            {t(`projects.items.${id}.description`)}
          </p>
          <p className={`text_${theme} case_role language mb-0`}>
            <span className="case_role_label">{t("projects.role")}</span>
            {t(`projects.items.${id}.role`)}
          </p>
        </div>

        <div className="col-12 col-lg-7 pe-lg-0">
          <div className="case_stack row gy-4 m-0">
            {stack.map(({ group, items }) => (
              <div key={group} className="col-12 col-sm-6 p-0 pe-sm-3">
                <p className="case_stack_group language mb-2">
                  {t(`projects.groups.${group}`)}
                </p>
                <div className="d-flex flex-wrap gap-2">
                  {items.map((tag) => (
                    <TechPill tag={tag} key={tag} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
