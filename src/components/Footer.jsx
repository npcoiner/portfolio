export default function Footer() {
  return (
    <footer style={{
      background: "var(--nick-dark)",
      padding: "16px 32px",
      color: "#e5e7eb",
      textAlign: "center",
    }}>
      <p style={{ margin: 0, fontSize: "0.8rem" }}>
        © {new Date().getFullYear()} Nick's Developer Showcase
      </p>
    </footer>
  );
}

