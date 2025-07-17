import { useCallback } from "react";

export default function BlogPost({ post, onBack }) {
  const renderBlock = useCallback((block, i) => {
    switch (block.type) {
      case "text":
        return <p key={i} style={{ margin: "0 0 1rem", lineHeight: 1.55 }}>{block.content}</p>;
      case "img":
        return (
          <img
            key={i}
            src={block.src}
            alt={block.alt || ""}
            style={{ width: "100%", margin: "0 0 1.5rem", objectFit: "cover" }}
          />
        );
      case "video":
        return (
          <video
            key={i}
            src={block.src}
            controls
            style={{ width: "100%", margin: "0 0 1.5rem", objectFit: "cover" }}
          />
        );
      default:
        return null;
    }
  }, []);

  return (
    <div style={{
      background: "var(--nick-panel)",
      boxShadow: "0 0 20px rgba(0,0,0,0.5)",
      maxWidth: "900px",
      width: "100%",
      padding: "40px",
      color: "var(--nick-text)",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      margin: "64px auto",
    }}>
      <button
        onClick={onBack}
        style={{
          alignSelf: "flex-start",
          padding: "6px 14px",
          borderRadius: "8px",
          background: "var(--nick-accent)",
          color: "var(--nick-text)",
          border: "none",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <h2 style={{ margin: "0 0 1rem" }}>{post.title}</h2>
      {post.article.map(renderBlock)}
    </div>
  );
}
