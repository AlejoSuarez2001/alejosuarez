import StackTechnologie from "../atoms/StackTechnologie";

export default function StackTechnologieContainer({ title, tags }) {
  return (
    <div className="col-12 col-lg-5 mb-5">
      <h5 className="stack_title language mb-4">{title}</h5>
      <div className="d-flex flex-row flex-wrap justify-content-center justify-content-lg-start">
        {tags.map((tag, index) => {
          return <StackTechnologie tag={tag} key={index} />;
        })}
      </div>
    </div>
  );
}
