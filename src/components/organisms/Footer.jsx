import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/ThemeContext";
import GitIcon from "../../assets/icons/GitIcon";
import LinkedIcon from "../../assets/icons/LinkedIcon";
import "../../styles/footer.css";

export default function Footer() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  function handleClick(link) {
    window.open(link, "_blank");
  }

  return (
    <section className="footer_container container-fluid d-flex flex-column align-items-center px-5 py-0">
      <div className="col-12 col-md-8 col-lg-12 col-xl-10 col-xxl-8  d-flex align-items-center justify-content-center">
        <div className="col-12 col-lg-8 d-flex flex-column flex-sm-row align-items-center justify-content-between mb-5">
          <div className="col-12 col-sm-8">
            <h4
              className={`footer_title language text_${theme} text-center text-sm-start mt-0 mb-5 mb-sm-0`}
            >
              {t("footer.title")}
            </h4>
          </div>
          <div className="col-12 col-sm-4 d-flex flex-row align-items-center justify-content-center justify-content-sm-end">
            <div
              className="footer_icon mx-2 cursor-pointer"
              onClick={() =>
                handleClick("https://github.com/alejosuarez2001")
              }
            >
              <GitIcon width={26} height={26} />
            </div>
            <span
              style={{ borderRight: "2px solid #3ca58e" }}
              className="mx-4 py-2"
            ></span>
            <div
              className="footer_icon mx-2 cursor-pointer"
              onClick={() =>
                handleClick("https://www.linkedin.com/in/alejo-ezequiel-suarez/")
              }
            >
              <LinkedIcon width={28} height={28} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
