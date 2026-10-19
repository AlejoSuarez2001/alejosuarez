import { useTranslation } from "react-i18next";
import SectionTitle from "../atoms/SectionTitle";
import AICard from "../molecules/AICard";
import { useRef, useEffect } from "react";
import { useScroll } from "../../contexts/ScrollContext";
import {
  LuBrainCircuit,
  LuSparkles,
  LuDatabase,
  LuWorkflow,
} from "react-icons/lu";
import { useTheme } from "../../contexts/ThemeContext";
import "../../styles/appliedAI.css";

export default function AppliedAI() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { setAi } = useScroll();
  const aiRef = useRef();

  useEffect(() => {
    setAi(aiRef);
  }, []);

  return (
    <section
      ref={aiRef}
      className="ai_container container-fluid d-flex flex-column align-items-center px-5 py-0"
    >
      <div className="col-12 col-md-8 col-lg-12 col-xl-10 col-xxl-8">
        <SectionTitle
          title={t(`ai.title`)}
          icon={<LuBrainCircuit className={`text_${theme}`} fontSize={40} />}
        />
        <div className="row g-4">
          <div className="col-12 col-lg-4">
            <AICard
              icon={<LuSparkles />}
              title={t("ai.production.title")}
              text={t("ai.production.text")}
              tags={["Vertex AI", "vLLM", "SSE", "LLM-as-judge"]}
            />
          </div>
          <div className="col-12 col-lg-4">
            <AICard
              icon={<LuDatabase />}
              title={t("ai.rag.title")}
              text={t("ai.rag.text")}
              tags={["Qdrant", "LlamaIndex", "Docling", "Ollama", "Evals"]}
            />
          </div>
          <div className="col-12 col-lg-4">
            <AICard
              icon={<LuWorkflow />}
              title={t("ai.agents.title")}
              text={t("ai.agents.text")}
              tags={["Tool calling", "Multi-agent", "MCP", "Claude Code", "Codex"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
