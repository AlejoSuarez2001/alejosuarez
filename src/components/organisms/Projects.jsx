import { useTranslation } from "react-i18next";
import SectionTitle from "../atoms/SectionTitle";
import CaseCard from "../molecules/CaseCard";
import uteniaWebm from "../../assets/videos/cases/utenia/hero.webm";
import uteniaMp4 from "../../assets/videos/cases/utenia/hero.mp4";
import uteniaPoster from "../../assets/videos/cases/utenia/poster.jpg";
import siaWebm from "../../assets/videos/cases/sia/hero.webm";
import siaMp4 from "../../assets/videos/cases/sia/hero.mp4";
import siaPoster from "../../assets/videos/cases/sia/poster.jpg";
import moviltrackWebm from "../../assets/videos/cases/moviltrack/hero.webm";
import moviltrackMp4 from "../../assets/videos/cases/moviltrack/hero.mp4";
import moviltrackPoster from "../../assets/videos/cases/moviltrack/poster.jpg";
import ripWebm from "../../assets/videos/cases/rip/hero.webm";
import ripMp4 from "../../assets/videos/cases/rip/hero.mp4";
import ripPoster from "../../assets/videos/cases/rip/poster.jpg";
import sicytWebm from "../../assets/videos/cases/sicyt/hero.webm";
import sicytMp4 from "../../assets/videos/cases/sicyt/hero.mp4";
import sicytPoster from "../../assets/videos/cases/sicyt/poster.jpg";
import { useRef, useEffect } from "react";
import { useScroll } from "../../contexts/ScrollContext";
import { LuFolderOpen } from "react-icons/lu";
import { useTheme } from "../../contexts/ThemeContext";
import "../../styles/projects.css";

const cases = [
  {
    id: "utenia",
    accent: "#c41230",
    media: { webm: uteniaWebm, mp4: uteniaMp4, poster: uteniaPoster },
    stack: [
      { group: "frontend", items: ["react", "tailwind"] },
      { group: "backend", items: ["python", "fastapi", "redis", "postgre"] },
      { group: "ai", items: ["ollama", "qdrant", "llamaindex", "docling"] },
      { group: "infra", items: ["docker", "traefik", "jenkins", "keycloak"] },
    ],
  },
  {
    id: "sia",
    accent: "#b71234",
    media: { webm: siaWebm, mp4: siaMp4, poster: siaPoster },
    stack: [
      { group: "frontend", items: ["react", "material"] },
      { group: "backend", items: ["node", "symfony", "bullmq", "redis"] },
      { group: "integrations", items: ["keycloak", "ldap", "googleWorkspace"] },
      { group: "infra", items: ["docker", "jenkins"] },
    ],
    site: "https://sia.frba.utn.edu.ar/",
  },
  {
    id: "moviltrack",
    accent: "#2563eb",
    media: { webm: moviltrackWebm, mp4: moviltrackMp4, poster: moviltrackPoster },
    stack: [
      { group: "frontend", items: ["react", "tailwind", "tanstack"] },
      { group: "backend", items: ["node", "express", "mongo", "puppeteer"] },
      { group: "infra", items: ["docker", "githubActions", "azure"] },
    ],
  },
  {
    id: "rip",
    accent: "#248a3e",
    media: { webm: ripWebm, mp4: ripMp4, poster: ripPoster },
    stack: [
      { group: "app", items: ["reactNative", "expo", "rc"] },
      { group: "backend", items: ["node", "express", "mongo"] },
      { group: "admin", items: ["react"] },
      { group: "integrations", items: ["stripe", "twilio", "azure"] },
    ],
    site: "https://ripalive.com/",
  },
  {
    id: "sicyt",
    accent: "#4f46e5",
    media: { webm: sicytWebm, mp4: sicytMp4, poster: sicytPoster },
    stack: [
      { group: "frontend", items: ["react", "tailwind"] },
      { group: "backend", items: ["node", "express", "sequelize", "mysql", "bullmq", "redis"] },
      { group: "infra", items: ["docker", "jenkins", "keycloak"] },
    ],
  },
];

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
          icon={<LuFolderOpen className={`text_${theme}`} fontSize={40} />}
        />
        <div>
          {cases.map((item, index) => (
            <CaseCard
              key={item.id}
              id={item.id}
              number={String(index + 1).padStart(2, "0")}
              accent={item.accent}
              media={item.media}
              stack={item.stack}
              site={item.site}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
