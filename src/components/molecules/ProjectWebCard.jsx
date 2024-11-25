import { useRef, useEffect } from "react";
import ProjectDescription from "./ProjectDescription";

export default function ProjectWebCard({ title, text, video, technologies }) {
  const videoRef = useRef(null);

  function handleVideoEnded() {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  }

  useEffect(() => {
    videoRef.current.addEventListener("ended", handleVideoEnded);
    return () => {
      videoRef.current.removeEventListener("ended", handleVideoEnded);
    };
  }, []);

  return (
    <div className="col-12 col-lg-5 mb-5 p-0">
      <div className="mb-4 rounded-2">
        <video
          className="projects_card_video rounded-2"
          ref={videoRef}
          autoPlay
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <ProjectDescription
        title={title}
        text={text}
        technologies={technologies}
        type="Web"
      />
    </div>
  );
}
