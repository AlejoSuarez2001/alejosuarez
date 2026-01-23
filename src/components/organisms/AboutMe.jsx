import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/ThemeContext";
import AboutMeImage from "../../assets/images/me.png";
import { useScroll } from "../../contexts/ScrollContext";
import { useEffect, useRef } from "react";
import cvEsp from "../../assets/pdf/CV_ESP.pdf";
import cvEng from "../../assets/pdf/CV_ENG.pdf";
import "../../styles/aboutMe.css";
import LinkedIcon from "../../assets/icons/LinkedIcon";
import GitIcon from "../../assets/icons/GitIcon";

export default function AboutMe() {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();
  const { setHome, scrollToElement, experience } = useScroll();
  const homeRef = useRef();

  function handleClick(link) {
    window.open(link, "_blank");
  }

  useEffect(() => {
    setHome(homeRef);
  }, []);

  const cvDownloadLink = i18n.language === 'en' ? cvEng : cvEsp;

  return (
    <section
      ref={homeRef}
      className="about_container container-fluid d-flex justify-content-center p-0 mb-sm-5 mb-lg-0"
    >
      <div className="about_subcontainer col-10 col-md-8 col-lg-12 col-xl-10 col-xxl-8 row align-items-center">
        <div className="col-12 col-lg-5 d-flex justify-content-center order-1 mb-xs-0 mb-md-5">
          <div className="about_img_wrapper">
            <div className="about_img_circle"></div>
            <img
              src={AboutMeImage}
              alt="Alejo Suárez - Full Stack Developer"
              className="about_img"
            />
          </div>
        </div>

        <div className="col-12 col-lg-7 d-flex flex-column justify-content-center order-2 ">
          <div className="d-flex flex-column align-items-center align-items-lg-start">
            <div className="col-12">
              <div className="col-12 ">
                <p className={`text_${theme} about_text_hi`}>
                  {t("aboutMe.greeting")}
                </p>

                <h1 className={`text_${theme} about_text_name`}>
                  {t("aboutMe.name")}
                </h1>

                <p className={`text_${theme} about_text_description`}>
                  <span className="highlight">{t("aboutMe.role")}</span>{" "}
                  {t("aboutMe.description.part1")}{" "}
                  <span className="highlight">{t("aboutMe.description.highlight1")}</span>,
                  <span className="highlight">{" "}{t("aboutMe.description.highlight2")}</span>
                  {" "}{t("aboutMe.description.connector")}{" "}
                  <span className="highlight">{t("aboutMe.description.highlight3")}</span>{" "}
                  {t("aboutMe.description.part2")}
                </p>
              </div>

              <div className="col-12 mt-4 d-flex align-items-center justify-content-around justify-content-lg-start">
                <button
                  onClick={() => {
                    window.location.href = "mailto:alejo.2001.suarez@gmail.com";
                  }}
                  className={`button_${theme} language me-lg-4 col-5 col-lg-4 px-1`}
                >
                  {t(`aboutMe.contact`)}
                </button>
                <button
                  onClick={() => window.open(cvDownloadLink, "_blank")}
                  className={`button_secondary_${theme} language me-lg-4 col-5 col-lg-4 px-1`}
                >
                  {t(`aboutMe.download`)}
                </button>
              </div>
              <div className="col-12 mt-5 d-flex align-items-center justify-content-center justify-content-lg-start">
                <div
                  onClick={() =>
                    handleClick("https://www.linkedin.com/in/alejo-ezequiel-suarez")
                  }
                  className={`about_icon language col-2 col-lg-1 px-1 d-flex justify-content-center justify-content-lg-start`}
                >
                  <LinkedIcon width={30} height={30} />
                </div>
                <div
                  onClick={() =>
                    handleClick("https://github.com/alejosuarez2001")
                  }
                  className={`about_icon language col-2 col-lg-1 px-1 d-flex justify-content-center justify-content-lg-start`}
                >
                  <GitIcon width={28} height={28} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="scroll_indicator"
        onClick={() => scrollToElement(experience)}
        role="button"
        aria-label="Scroll to experience section"
      >
        <span></span>
      </div>

    </section>
  );
}
