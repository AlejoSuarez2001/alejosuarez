import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/ThemeContext";
import AboutMeImage from "../../assets/images/me.png";
import { useScroll } from "../../contexts/ScrollContext";
import { useEffect, useRef } from "react";
import cv from "../../assets/pdf/CV.pdf";
import "../../styles/aboutMe.css";
import LinkedIcon from "../../assets/icons/LinkedIcon";
import GitIcon from "../../assets/icons/GitIcon";

export default function AboutMe() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const { setHome } = useScroll();
  const homeRef = useRef();

  function handleClick(link) {
    window.open(link, "_blank");
  }

  useEffect(() => {
    setHome(homeRef);
  }, []);

  return (
    <section
      ref={homeRef}
      className="about_container container-fluid d-flex justify-content-center p-0 mb-sm-5 mb-lg-0"
    >
      <div className="about_subcontainer col-10 col-md-8 col-lg-12 col-xl-10 col-xxl-8 row justify-content-center">
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-sm-center order-2 order-lg-1 p-0">
          <div className="d-flex flex-column align-items-center">
            <div className="col-12 col-sm-10">
              <p className={`text_${theme} language about_text_hi`}>
                {t(`aboutMe.title.1`)}
              </p>
              <p className={`text_${theme} language about_text_name`}>
                {t(`aboutMe.title.2`)} Alejo
              </p>
              <p className={`text_${theme} language about_text_info`}>
                {t(`aboutMe.title.3`)}
              </p>
            </div>
            <div className="col-12 col-sm-10 mt-4 d-flex align-items-center justify-content-around justify-content-lg-start">
              <button
                onClick={() => {
                  window.location.href = "mailto:alejo.2001.suarez@gmail.com";
                }}
                className={`button_${theme} language me-lg-4 col-5 col-lg-4 px-1`}
              >
                {t(`aboutMe.contact`)}
              </button>
              <button
                onClick={() => window.open(cv, "_blank")}
                className={`button_secondary_${theme} language me-lg-4 col-5 col-lg-4 px-1`}
              >
                {t(`aboutMe.download`)}
              </button>
            </div>
            <div className="col-12 col-sm-10 mt-5 d-flex align-items-center justify-content-center justify-content-lg-start">
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
        <div className="p-0 p-sm-3 col-12 col-lg-6 d-flex justify-content-center align-items-center mt-0 mt-sm-4 mt-lg-0 order-1 order-lg-1">
          <img
            className="about_img col-10 col-sm-8 col-lg-11"
            style={{width: "250px", borderRadius: "2%", boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"}}
            src={AboutMeImage}
          />
        </div>
      </div>
    </section>
  );
}
