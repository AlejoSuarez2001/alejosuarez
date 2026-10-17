import { useEffect, useRef } from "react";

export default function LoopVideo({ media, label, className = "" }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.muted = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? video.play().catch(() => {}) : video.pause();
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={media.poster}
      aria-label={label}
      muted
      loop
      playsInline
      preload="none"
    >
      <source src={media.webm} type='video/webm; codecs="av01.0.05M.08"' />
      <source src={media.mp4} type="video/mp4" />
    </video>
  );
}
