import ProjectDescription from "./ProjectDescription";

export default function ProjectWebCard({
  title,
  text,
  video,
  technologies,
  url,
}) {
  return (
    <div className="col-12 col-lg-5 mb-5 p-0">
      <div className="mb-4 rounded-2">
        <video
          className="projects_card_video_web rounded-2"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <ProjectDescription
        title={title}
        text={text}
        technologies={technologies}
        type="Web"
        url={url}
      />
    </div>
  );
}

