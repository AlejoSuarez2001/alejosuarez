import { useRef, useEffect } from "react";
import ProjectDescription from "./ProjectDescription";

export default function ProjectMobileCard({
  title,
  text,
  technologies,
  video1,
  video2,
}) {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  function handleVideoEnded(ref) {
    return () => {
      ref.current.currentTime = 0;
      ref.current.play();
    };
  }

  useEffect(() => {
    const video1RefCurrent = videoRef1.current;
    const video2RefCurrent = videoRef2.current;

    video1RefCurrent.addEventListener("ended", handleVideoEnded(videoRef1));
    video2RefCurrent.addEventListener("ended", handleVideoEnded(videoRef2));

    return () => {
      video1RefCurrent.removeEventListener(
        "ended",
        handleVideoEnded(videoRef1)
      );
      video2RefCurrent.removeEventListener(
        "ended",
        handleVideoEnded(videoRef2)
      );
    };
  }, []);

  return (
    <div className="col-12 col-lg-5 mb-5 p-0">
      <div className="col-12 rounded-2 d-flex mb-4 justify-content-between">
        <div className="col-5">
          <video
            className="rounded-2 projects_card_video"
            ref={videoRef1}
            autoPlay
            muted
          >
            <source src={video1} type="video/mp4" />
          </video>
        </div>
        <div className="col-5">
          <video
            className="rounded-2 projects_card_video"
            ref={videoRef2}
            autoPlay
            muted
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
      />
    </div>
  );
}
