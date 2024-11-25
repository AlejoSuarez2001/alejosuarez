import { useState, useEffect } from "react";
import NavDesktop from "../molecules/NavDesktop";
import NavMobile from "../molecules/NavMobile";
import "../../styles/nav.css";
import { useScroll } from "../../contexts/ScrollContext";

export default function Nav() {
  const [desktopBreakpoint, setdesktopBreakpoint] = useState(992);
  const { screenWidth } = useScroll();

  return (
    <section className="nav_container">
      {screenWidth >= desktopBreakpoint ? <NavDesktop /> : <NavMobile />}
    </section>
  );
}
