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
    "react",
    "bootstrap",
    "chakra",
    "next",
    "expo",
    "reactNative",
    "figma",
    "material",
    "tailwind"
  ];
  const backTags = [
    "node",
    "express",
    "api",
    "sequelize",
    "rc",
    "mp",
    "stripe",
    "paypal",
    "keycloak",
    "bullmq",
    "redis"
  ];
  const cicdTags = [
    "bash",
    "gitlab",
    "docker",
    "jenkins",
    "grafana",
    "aws",
    "kubernetes"
  ]
  const toolTags = [
    "ubuntu",
    "bash",
    "git",
    "gitlab",
    "docker",
    "wordpress",
    "grafana"
  ];
  const dbTags = [
    "sql",
    "mysql",
    "postgre",
    "mongo",
    "redis"
  ]
  const learningTags = [
    "ts",
    "aws",
    "kubernetes"
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
        <div className="d-flex flex-wrap col-12 justify-content-around">
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
            tags={cicdTags}
          />
          <StackTechnologieContainer
            title={t("stack.subtitle.4")}
            tags={toolTags}
          />
          <StackTechnologieContainer
            title={t("stack.subtitle.5")}
            tags={dbTags}
          />
          <StackTechnologieContainer
            title={t("stack.subtitle.6")}
            tags={learningTags}
          />
        </div>
      </div>
    </section>
  );
}
