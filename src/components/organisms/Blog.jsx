import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Article from "../molecules/Article";
import { useTranslation } from "react-i18next";
import "../../styles/blog.css";
import SectionTitle from "../atoms/SectionTitle";
import { LuBookOpen } from "react-icons/lu";
import { useTheme } from "../../contexts/ThemeContext";
import { useScroll } from "../../contexts/ScrollContext";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const { theme } = useTheme();
  const blogRef = useRef();
  const { setBlog } = useScroll();

  useEffect(() => {
    setBlog(blogRef);
  }, []);

  useEffect(() => {
    axios
      .get("https://dev.to/api/articles", {
        params: {
          username: "alejosuarez2001",
          per_page: 3,
        },
      })
      .then((res) => setArticles(res.data))
      .catch((err) => console.error("Error fetching dev.to articles", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section
      ref={blogRef}
      className="blog_container container-fluid d-flex flex-column align-items-center px-5 py-0"
    >
      <div className="col-12 col-md-8 col-lg-12 col-xl-10 col-xxl-8">
        <SectionTitle
          title={t(`blog.title`)}
          icon={
            <LuBookOpen className={`text_${theme}`} fontSize={40} />
          }
        />
        <div className="container-xl">
          {loading ? (
            <div className="d-flex justify-content-center py-5">
              <div className="spinner-border text-light" />
            </div>
          ) : (
            <>
              <div className="row g-4">
                {articles.map((article) => (
                  <div key={article.id} className="col-12 col-md-4">
                    <Article article={article} />
                  </div>
                ))}
              </div>

              <div className="d-flex justify-content-center mt-5">
                <a
                  href="https://dev.to/alejosuarez2001"
                  target="_blank"
                  rel="noreferrer"
                  className={`button_secondary_${theme} language col-4 col-md-2 text-center py-2`}
                >
                  {t("blog.verTodos")}
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
