import { useScroll } from "../../contexts/ScrollContext";
import { useTheme } from "../../contexts/ThemeContext";

export default function ToTopArrow() {
  const { theme } = useTheme();
  const { scrollY, screenWidth } = useScroll();

  return (
    <div
      onClick={() => {
        scrollY == 0
          ? null
          : window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
      }}
      className={`${scrollY == 0 ? "arrow_invisible" : "arrow_visible"}
        ${
          screenWidth >= 992 ? "app_arrow_desktop" : "app_arrow_mobile"
        } background_secondary_${theme} app_arrow_container align-items-center justify-content-around d-flex me-3 mb-lg-3 py-2 px-1`}
    >
      <span className={`text_${theme} app_arrow material-symbols-outlined`}>
        arrow_upward
      </span>
    </div>
  );
}
