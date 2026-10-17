import { useTranslation } from "react-i18next";
import SectionTitle from "../atoms/SectionTitle";
import CertificationCard from "../molecules/CertificationCard.jsx";
import CertificationGroup from "../molecules/CertificationGroup.jsx";
import cert_dbd from "../../assets/images/DiplomaturaDB.webp";
import cert_ddk from "../../assets/images/DiplomaturaDockerKubernetes.webp";
import cert_fs from "../../assets/images/DiplomaturaFullStack.webp";
import cert_dia from "../../assets/images/DiplomaturaIA.webp";
import cert_be from "../../assets/images/DiplomaturaBackend.webp";
import cert_bc from "../../assets/images/BootcampUTN.webp";
import cert_dp from "../../assets/images/DiplomaturaPython.webp";
import cert_esi from "../../assets/images/ExpertoSeguridadInformatica.webp";
import cert_placeholder from "../../assets/images/certPlaceholder.svg";
import cert_degree from "../../assets/images/degreeUtn.svg";
import cert_ace from "../../assets/images/GoogleACE.jpg";
import { useRef, useEffect } from "react";
import { useScroll } from "../../contexts/ScrollContext";
import { LuGraduationCap } from "react-icons/lu";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import "../../styles/certifications.css";

export default function Certifications() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const certificationsRef = useRef();
  const { setCertifications } = useScroll();

  useEffect(() => {
    setCertifications(certificationsRef);
  }, []);

  return (
    <section
      ref={certificationsRef}
      className="certifications_container container-fluid d-flex flex-column align-items-center px-5 py-0"
    >
      <div className="col-12 col-md-8 col-lg-12 col-xl-10 col-xxl-8">
        <SectionTitle
          title={t(`certifications.title`)}
          icon={
            <LuGraduationCap className={`text_${theme}`} fontSize={40} />
          }
        />
        <CertificationGroup title={t("certifications.groups.degree")}>
          <CertificationCard
            cert={cert_degree}
            title={t("certifications.degree.title")}
            subtitle={t("certifications.degree.place")}
            date={t("certifications.degree.date")}
          />
        </CertificationGroup>
        <CertificationGroup title={t("certifications.groups.google")}>
          <CertificationCard
            cert={cert_ace}
            title={t("certifications.ace.title")}
            subtitle={t("certifications.ace.place")}
            date={t("certifications.ace.date")}
            url="https://www.credly.com/badges/8b0bfc20-09ac-4eb7-b058-a96a1ad55737"
          />
          <CertificationCard
            cert={cert_placeholder}
            title={t("certifications.pcd.title")}
            subtitle={t("certifications.pcd.place")}
            date={t("certifications.pcd.date")}
          />
        </CertificationGroup>
        <CertificationGroup title={t("certifications.groups.utn")}>
          <CertificationCard
            cert={cert_ddk}
            title={t("certifications.ddk.title")}
            subtitle={t("certifications.ddk.place")}
            date={t("certifications.ddk.date")}
            url="https://validator.centrodeelearning.com/validator/ehZ3aEUuLx"
          />
          <CertificationCard
            cert={cert_dia}
            title={t("certifications.dia.title")}
            subtitle={t("certifications.dia.place")}
            date={t("certifications.dia.date")}
            url="https://validator.centrodeelearning.com/validator/RIS8sqVI3M"
          />
          <CertificationCard
            cert={cert_bc}
            title={t("certifications.bootcamp.title")}
            subtitle={t("certifications.bootcamp.place")}
            date={t("certifications.bootcamp.date")}
            pdf="bootcamp"
          />
          <CertificationCard
            cert={cert_dp}
            title={t("certifications.python.title")}
            subtitle={t("certifications.python.place")}
            date={t("certifications.python.date")}
            url="https://validator.centrodeelearning.com/validator/WozRYXyULu"
          />
          <CertificationCard
            cert={cert_be}
            title={t("certifications.dbe.title")}
            subtitle={t("certifications.dbe.place")}
            date={t("certifications.dbe.date")}
            url="https://validator.centrodeelearning.com/validator/0lPvJVNjBu"
          />
          <CertificationCard
            cert={cert_dbd}
            title={t("certifications.dbd.title")}
            subtitle={t("certifications.dbd.place")}
            date={t("certifications.dbd.date")}
            url="https://validator.centrodeelearning.com/validator/c4tLVirD2X"
          />
          <CertificationCard
            cert={cert_esi}
            title={t("certifications.esi.title")}
            subtitle={t("certifications.esi.place")}
            date={t("certifications.esi.date")}
            url="https://validator.centrodeelearning.com/validator/Y65638FNpj"
          />
          <CertificationCard
            cert={cert_fs}
            title={t("certifications.fullstack.title")}
            subtitle={t("certifications.fullstack.place")}
            date={t("certifications.fullstack.date")}
            url="https://validator.centrodeelearning.com/validator/c8rIytTLtM"
          />
        </CertificationGroup>
      </div>
    </section>
  );
}
