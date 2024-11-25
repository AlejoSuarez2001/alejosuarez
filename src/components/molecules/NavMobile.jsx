import { useTheme } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import NavMobileItem from "../atoms/NavMobileItem";
import NavHeader from "../atoms/NavHeader";
import NavTools from "../atoms/NavTools";
import NavMobileMenu from "../atoms/NavMobileMenu";
import { useScroll } from "../../contexts/ScrollContext";

export default function NavMobile() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const {
    scrollY,
    scrollToElement,
    home,
    experience,
    projects,
    certifications,
    stack,
  } = useScroll();

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`${menuOpen ? "nav_open" : "nav_close"} ${
        scrollY == 0 && !menuOpen ? "shadow_invisible" : "shadow_visible"
      } container_${theme} nav_mobile position-fixed container-fluid d-flex flex-column align-items-center p-0 m-0 py-3`}
    >
      <div className="row col-10 col-md-8">
        <NavHeader
          onClick={() => {
            scrollToElement(home);
          }}
        />
        <div
          className={`text_${theme} col-5 col-sm-7 col-md-7 p-0 m-0 align-items-center justify-content-end d-flex`}
        >
          <NavTools />
          <NavMobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </div>
      <div className="col-10 col-10 col-md-8 my-3 d-flex flex-column">
        <NavMobileItem
          onClick={() => {
            scrollToElement(home);
            setMenuOpen(false);
          }}
          name={t(`nav.home`)}
        />
        <NavMobileItem
          onClick={() => {
            scrollToElement(experience);
            setMenuOpen(false);
          }}
          name={t(`nav.experience`)}
        />
        <NavMobileItem
          onClick={() => {
            scrollToElement(projects);
            setMenuOpen(false);
          }}
          name={t(`nav.projects`)}
        />
        <NavMobileItem
          onClick={() => {
            scrollToElement(certifications);
            setMenuOpen(false);
          }}
          name={t(`nav.certifications`)}
        />
        <NavMobileItem
          onClick={() => {
            scrollToElement(stack);
            setMenuOpen(false);
          }}
          name={t(`nav.technologies`)}
        />
      </div>
    </nav>
  );
}
