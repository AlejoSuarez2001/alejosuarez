import { useTranslation } from "react-i18next";
import SectionTitle from "../atoms/SectionTitle";
import StackTechnologieContainer from "../molecules/StackTechnologieContainer";
import { useRef, useEffect } from "react";
import { useScroll } from "../../contexts/ScrollContext";
import { TbStack2 } from "react-icons/tb";
import { useTheme } from "../../contexts/ThemeContext";
import "../../styles/stack.css";

export default function Stack() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { setStack } = useScroll();
  const stackRef = useRef();

  const frontTags = [
    "html",
    "css",
    "js",
    "ts",
    "react",
    "next",
    "astro",
    "reactNative",
    "expo",
    "tailwind",
    "shadcn",
    "material",
    "chakra",
    "bootstrap",
    "tanstack",
    "figma"
  ];
  const backTags = [
    "node",
    "express",
    "python",
    "fastapi",
    "api",
    "openapi",
    "prisma",
    "sequelize",
    "zod",
    "appsScript",
    "keycloak",
    "bullmq",
    "rc",
    "mp",
    "stripe",
    "paypal"
  ];
  const aiTags = [
    "gemini",
    "ollama",
    "vllm",
    "llamaindex",
    "qdrant",
    "docling",
    "mcp",
    "claudeCode",
    "codex"
  ];
  const gcpTags = [
    "gcp",
    "cloudRun",
    "computeEngine",
    "vertexAI",
    "cloudStorage",
    "bigquery",
    "secretManager",
    "kms",
    "cloudBuild",
    "firebase"
  ];
  const devopsTags = [
    "docker",
    "kubernetes",
    "helm",
    "terraform",
    "githubActions",
    "gitlab",
    "jenkins",
    "traefik",
    "cloudflare",
    "grafana"
  ];
  const dbTags = [
    "sql",
    "postgre",
    "mysql",
    "mongo",
    "redis",
    "supabase"
  ];
  const toolTags = [
    "git",
    "ubuntu",
    "bash",
    "playwright",
    "vitest",
    "pytest",
    "wordpress"
  ];

  useEffect(() => {
    setStack(stackRef);
  }, []);

  return (
    <section
      ref={stackRef}
      className="stack_container container-fluid d-flex flex-column align-items-center px-5 py-0"
    >
      <div className="col-12 col-md-8 col-lg-12 col-xl-10 col-xxl-8">
        <SectionTitle
          title={t(`stack.title`)}
          icon={<TbStack2 className={`text_${theme}`} fontSize={40} />}
        />
        <div className="d-flex flex-wrap col-12 justify-content-between">
          <StackTechnologieContainer
            title={t("stack.subtitle.1")}
            tags={frontTags}
          />
          <StackTechnologieContainer
            title={t("stack.subtitle.2")}
            tags={backTags}
          />
          <StackTechnologieContainer
            title={t("stack.subtitle.3")}
            tags={aiTags}
          />
          <StackTechnologieContainer
            title={t("stack.subtitle.4")}
            tags={gcpTags}
          />
          <StackTechnologieContainer
            title={t("stack.subtitle.5")}
            tags={devopsTags}
          />
          <StackTechnologieContainer
            title={t("stack.subtitle.6")}
            tags={dbTags}
          />
          <StackTechnologieContainer
            title={t("stack.subtitle.7")}
            tags={toolTags}
          />
        </div>
      </div>
    </section>
  );
}
