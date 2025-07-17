import Card from "./Card";
import Article from "./Article";
import projectsData from "../data/projectsData.js";

export default function GalleryProjects({ articleId, setArticleId }) {
  const selected = projectsData.find((p) => p.slug === articleId) ?? null;

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "64px 16px" }}>
      {!selected ? (
        <div
          style={{
            background: "var(--nick-panel)",
            borderRadius: "3px",
            boxShadow: "0 0 20px rgba(0,0,0,0.5)",
            maxWidth: "900px",
            width: "100%",
            padding: "40px",
          }}
        >
          <div
            style={{
              display: "grid",
              gap: "32px",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            }}
          >
            {projectsData.map((p) => (
              <div key={p.title} onClick={() => setArticleId(p.slug)} style={{ cursor: "pointer" }}>
                <Card {...p} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Article project={selected} onBack={() => setArticleId(null)} />
      )}
    </div>
  );
}
