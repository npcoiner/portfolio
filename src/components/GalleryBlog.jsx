import { useState } from "react";
import Card from "./Card";
import Article from "./Article";
import blogPosts from "../data/blogPosts.js";


const posts = blogPosts;

export default function GalleryBlog() {
  const [selected, setSelected] = useState(null);

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
            {posts.map((p) => (
              <div key={p.title} onClick={() => setSelected(p)} style={{ cursor: "pointer" }}>
                <Card {...p} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Article project={selected} onBack={() => setSelected(null)} />
      )}
    </div>
  );
}
