import { useTheme } from "../../contexts/ThemeContext";
import bootcamp from "../../assets/pdf/BootcampUTN.pdf";

export default function CertificationCard({
  cert,
  title,
  subtitle,
  date,
  pdf = null,
  url = null,
}) {
  const { theme } = useTheme();

  const pdfs = {
    bootcamp: bootcamp,
  };

  function handleCertificate() {
    pdf ? window.open(pdfs[pdf], "_blank") : window.open(url, "_blank");
  }

  return (
    <div
      onClick={() => { handleCertificate() }}
      className={`cursor_pointer col-12 col-lg-5 d-flex flex-wrap mb-5 align-items-center justify-content-center justify-content-sm-start`}
    >
      <div className="col-10 col-sm-3 col-md-5 col-xl-4 col-xxl-4 overflow-hidden me-0 me-sm-3 mb-3 mb-sm-0 rounded-2 cert_img_wrapper">
        <img src={cert} className="certifications_card_img" />
      </div>

      <div className="col-10 col-sm-8 col-md-6  col-xl-7 col-xxl-7">
        <h2 className="certifications_card_title language m-0 mb-1">{title}</h2>
        <h5
          className={`text_${theme} language certifications_card_subtitle m-0`}
        >
          {subtitle}
        </h5>
        <p className="certifications_card_date language m-0">{date}</p>
      </div>
    </div>
  );
}
