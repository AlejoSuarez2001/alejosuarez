import ProjectDescription from "./ProjectDescription";

export default function ProjectMobileCard({
  title,
  text,
  technologies,
  video1,
  video2,
  url
}) {
  return (
    <div className="col-12 col-lg-5 mb-5 p-0">
      <div className="col-12 rounded-2 d-flex mb-4 justify-content-between">
        <div className="col-5">
          <video
            className="rounded-2 projects_card_video_mobile"
            autoPlay
            muted
            playsInline
            loop
          >
            <source src={video1} type="video/mp4" />
          </video>
        </div>

        <div className="col-5">
          <video
            className="rounded-2 projects_card_video_mobile"
            autoPlay
            muted
            playsInline
            loop
          >
            <source src={video2} type="video/mp4" />
          </video>
        </div>
      </div>

      <ProjectDescription
        title={title}
        text={text}
        technologies={technologies}
        type="Mobile"
        url={url}
      />
    </div>
  );
}
