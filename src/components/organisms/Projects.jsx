import { useTranslation } from "react-i18next";
import SectionTitle from "../atoms/SectionTitle";
import ProjectWebCard from "../molecules/ProjectWebCard";
import ProjectMobileCard from "../molecules/ProjectMobileCard";
import samay from "../../assets/videos/samay.webm";
import ripadmin from "../../assets/videos/ripadmin.webm";
import pap from "../../assets/videos/pap.webm";
import traducciones from "../../assets/videos/traducciones.webm";
import credencial1 from "../../assets/videos/credencial1.webm";
import credencial2 from "../../assets/videos/credencial2.webm";
import moviltrack from "../../assets/videos/moviltrack.webm";
import ripalive1 from "../../assets/videos/ripalive1.webm";
import ripalive2 from "../../assets/videos/ripalive2.webm";
import siaFrontend from "../../assets/videos/siaFrontend.webm";
import { useRef, useEffect } from "react";
import { useScroll } from "../../contexts/ScrollContext";
import { PiCubeBold } from "react-icons/pi";
import { useTheme } from "../../contexts/ThemeContext";
import "../../styles/projects.css";

export default function Projects() {
  const { t } = useTranslation();
  const projectsRef = useRef();
  const { theme } = useTheme();
  const { setProjects } = useScroll();

  useEffect(() => {
    setProjects(projectsRef);
  }, []);

  return (
    <section
      ref={projectsRef}
      className="projects_container container-fluid d-flex flex-column align-items-center px-5 py-0"
    >
      <div className="col-12 col-md-8 col-lg-12 col-xl-10 col-xxl-8">
        <SectionTitle
          title={t(`projects.title`)}
          icon={<PiCubeBold className={`text_${theme}`} fontSize={40} />}
        />
        <div className="d-flex flex-wrap col-12 justify-content-around">
          <ProjectWebCard
            video={moviltrack}
            title={t("projects.moviltrack.title")}
            text={t("projects.moviltrack.text")}
            technologies={[
              "git",
              "react",
              "html",
              "css",
              "js",
              "tailwind",
              "node",
              "mongo",
            ]}
          />
          <ProjectWebCard
            video={pap}
            title={t("projects.pap.title")}
            text={t("projects.pap.text")}
            technologies={[
              "git",
              "docker",
              "react",
              "html",
              "css",
              "js",
              "chakra",
              "node",
              "sql",
            ]}
          />
          <ProjectWebCard
            video={traducciones}
            title={t("projects.traducciones.title")}
            text={t("projects.traducciones.text")}
            technologies={[
              "git",
              "docker",
              "react",
              "html",
              "css",
              "js",
              "node",
              "sql",
            ]}
          />
          <ProjectWebCard
            video={ripadmin}
            title={t("projects.ripadmin.title")}
            text={t("projects.ripadmin.text")}
            technologies={[
              "git",
              "react",
              "html",
              "css",
              "js",
              "bootstrap",
              "node",
              "stripe",
              "mongo",
            ]}
          />
          <ProjectWebCard
            video={siaFrontend}
            title={t("projects.siaFrontend.title")}
            text={t("projects.siaFrontend.text")}
            technologies={[
              "git",
              "react",
              "html",
              "css",
              "js",
              "node",
              "material"
            ]}
          />
          <ProjectWebCard
            video={samay}
            title={t("projects.samay.title")}
            text={t("projects.samay.text")}
            technologies={["git", "html", "css", "js", "bootstrap"]}
          />
          <ProjectMobileCard
            video1={ripalive1}
            video2={ripalive2}
            title={t("projects.ripalive.title")}
            text={t("projects.ripalive.text")}
            technologies={["git", "reactNative", "css", "js", "node", "mongo", "rc", "stripe"]}
          />
          <ProjectMobileCard
            video1={credencial1}
            video2={credencial2}
            title={t("projects.credential.title")}
            text={t("projects.credential.text")}
            technologies={["git", "docker", "css", "reactNative", "js", "node"]}
          />
        </div>
      </div>
    </section>
  );
}
