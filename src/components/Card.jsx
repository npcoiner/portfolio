export default function Card({ title, description, date, mediaSrc, isVideo }) {
  return (
    <div
      className="nick-card"
      style={{
        display: "flex",
        flexDirection: "column",
        background: "var(--nick-card)",
        borderRadius: "3px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
      }}
    >
      {/* Media keeps true 16 : 9 */}
      <div style={{ aspectRatio: "16/9", width: "100%" }}>
        {isVideo ? (
          <video
            src={mediaSrc}
            controls
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <img
            src={mediaSrc}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </div>

      {/* Text */}
      <div
        style={{
          padding: "16px",
          color: "var(--nick-text)",
          minHeight: "96px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "1.1rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          title={title}
        >
          {title}
        </h3>

        {date && (
          <span style={{ fontSize: "0.75rem", opacity: 0.6, marginTop: 2 }}>
            {new Date(date).toLocaleDateString()}
          </span>
        )}

        <p
          style={{
            margin: "4px 0 0",
            opacity: 0.8,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "1.2em",
          }}
          title={description}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
