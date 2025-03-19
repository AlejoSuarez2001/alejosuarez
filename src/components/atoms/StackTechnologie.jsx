import { useTheme } from "../../contexts/ThemeContext";
import react from "../../assets/images/react.webp";
import html from "../../assets/images/html.webp";
import js from "../../assets/images/js.webp";
import css from "../../assets/images/css.webp";
import docker from "../../assets/images/docker.webp";
import sql from "../../assets/images/sql.webp";
import node from "../../assets/images/node.webp";
import bootstrap from "../../assets/images/bootstrap.webp";
import git from "../../assets/images/git.webp";
import ubuntu from "../../assets/images/ubuntu.webp";
import bash from "../../assets/images/bash.webp";
import next from "../../assets/images/next.webp";
import express from "../../assets/images/express.webp";
import sequelize from "../../assets/images/sequelize.webp";
import api from "../../assets/images/api.webp";
import expo from "../../assets/images/expo.webp";
import wordpress from "../../assets/images/wordpress.webp";
import figma from "../../assets/images/figma.webp";
import gitlab from "../../assets/images/gitlab.webp";
import ts from "../../assets/images/ts.webp";
import mongo from "../../assets/images/mongo.webp";
import chakra from "../../assets/images/chakra.webp";
import paypal from "../../assets/images/paypal.webp";
import material from "../../assets/images/material.webp";
import mp from "../../assets/images/mp.webp";
import rc from "../../assets/images/rc.webp";
import stripe from "../../assets/images/stripe.webp";

const tagList = {
  react: { name: "React", img: react },
  reactNative: { name: "React Native", img: react },
  node: { name: "Node", img: node },
  sql: { name: "SQL", img: sql },
  docker: { name: "Docker", img: docker },
  html: { name: "HTML", img: html },
  css: { name: "CSS", img: css },
  js: { name: "JavaScript", img: js },
  bootstrap: { name: "Bootstrap", img: bootstrap },
  git: { name: "Git", img: git },
  ubuntu: { name: "Ubuntu", img: ubuntu },
  bash: { name: "Terminal", img: bash },
  next: { name: "Next", img: next },
  express: { name: "Express", img: express },
  expo: { name: "Expo", img: expo },
  wordpress: { name: "Wordpress", img: wordpress },
  figma: { name: "Figma", img: figma },
  gitlab: { name: "Gitlab", img: gitlab },
  ts: { name: "TypeScript", img: ts },
  mongo: { name: "MongoDB", img: mongo },
  chakra: { name: "Chakra UI", img: chakra },
  sequelize: { name: "Sequelize", img: sequelize },
  api: { name: "API Rest", img: api },
  material: { name: "Material UI", img: material },
  rc: { name: "RevenueCat", img: rc },
  mp: { name: "Mercado Pago", img: mp },
  stripe: { name: "Stripe", img: stripe },
  paypal: { name: "PayPal", img: paypal },
};

export default function StackTechnologie({ tag }) {
  const { theme } = useTheme();

  return (
    <div
      className="rounded-2 d-flex flex-column col-5 col-sm-3 align-items-center me-3 mb-4 p-2"
    >
      <img className="mb-3" width="50" height="50" src={tagList[tag].img} />
      <span className={`text_${theme} stack_tag_name text-center`}>
        {tagList[tag].name}
      </span>
    </div>
  );
}
