export default function CertificationGroup({ title, children }) {
  return (
    <div className="col-12 mb-4">
      <h5 className="certifications_group_title language mb-4">{title}</h5>
      <div className="d-flex flex-wrap col-12 justify-content-between">
        {children}
      </div>
    </div>
  );
}
