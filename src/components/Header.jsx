import SocialLinks from "./SocialLinks";

export default function Header({ currentView, setView }) {
  return (
    <header
      style={{
        background: "var(--nick-dark)",
        padding: "16px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "16px",
        color: "#e5e7eb",
      }}
    >
      {/* === Left section: avatar + info column === */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          minWidth: 0,
        }}
      >
        {/* Avatar */}
        <img
          src={`images/nick.png`}
          alt="Nick avatar"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "3px",
            objectFit: "cover",
            flexShrink: 0,
          }}
        />

        {/* Title, bio, links in one column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "1.35rem",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "260px",
            }}
          >
            Nick — Developer Showcase
          </h1>

          <span style={{ fontSize: "0.9rem", opacity: 0.85 }}>
            Full‑stack engineer focusing on 3D&nbsp;graphics, WebGPU, and AI.
          </span>

          <SocialLinks />
        </div>
      </div>

      {/* === Right section: view toggle buttons === */}
      <nav style={{ display: "flex", gap: "10px" }}>
        {[
          { id: "projects", label: "Projects" },
          { id: "blog", label: "Blog" },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setView(btn.id)}
            style={{
              padding: "6px 14px",
              borderRadius: "3px",
              background: currentView === btn.id ? "var(--nick-accent)" : "transparent",
              color: "#e5e7eb",
              border: "1px solid var(--nick-accent)",
              cursor: "pointer",
              minWidth: "90px",
            }}
          >
            {btn.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
