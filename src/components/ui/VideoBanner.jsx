export default function VideoBanner({ src = "/assets/banner.mp4", overlay = "rgba(8,8,14,0.72)" }) {
  return (
    <div style={{ position:"absolute", inset:0, zIndex:0, overflow:"hidden" }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
      {/* Dark overlay to keep text readable over the video */}
      <div style={{ position:"absolute", inset:0, background:overlay }} />
    </div>
  );
}
