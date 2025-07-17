export default function SocialLinks() {
  const links = [
    {
      label: "Resume",
      url: "resume.pdf",
      icon: "📄",
    },
    {
      label: "GitHub",
      url: "https://github.com/npcoiner",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="currentColor"
          aria-label="GitHub logo"
        >
          <path d="M12 .5C5.66.5.5 5.8.5 12.35c0 5.24 3.44 9.69 8.2 11.27.6.12.82-.27.82-.59 0-.29-.01-1.05-.02-2.06-3.34.75-4.04-1.66-4.04-1.66-.55-1.44-1.35-1.83-1.35-1.83-1.1-.79.09-.78.09-.78 1.21.09 1.85 1.28 1.85 1.28 1.08 1.9 2.83 1.35 3.52 1.04.11-.81.42-1.35.76-1.66-2.67-.31-5.47-1.37-5.47-6.11 0-1.35.46-2.46 1.22-3.33-.12-.3-.53-1.53.12-3.18 0 0 1-.33 3.3 1.27a11.1 11.1 0 0 1 6 0c2.3-1.6 3.3-1.27 3.3-1.27.65 1.65.24 2.88.12 3.18.76.87 1.22 1.98 1.22 3.33 0 4.76-2.81 5.79-5.49 6.09.43.38.81 1.1.81 2.22 0 1.6-.02 2.88-.02 3.28 0 .32.22.71.83.59 4.75-1.58 8.19-6.03 8.19-11.27C23.5 5.8 18.34.5 12 .5Z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/nicholas-c-836726213",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="18"
          height="18"
          fill="currentColor"
          aria-label="LinkedIn logo"
        >
          <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341C24.18 107 0 82.5 0 53.9 0 25.3 24.18.8 53.84.8s53.84 24.5 53.84 53.1c0 28.6-24.18 53.1-53.84 53.1zM447.9 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.8-43.7 31.1-2.2 5.4-2.8 13-2.8 20.6V448h-92.5s1.2-267.6 0-295H269v41.8c12.3-19 34.2-46 83.2-46 60.8 0 106.4 39.7 106.4 125.1V448z" />
        </svg>
      ),
    },
    {
      label: "Email",
      url: "mailto:nicholascoiner@gmail.com",
      icon: "✉️",
    },
  ];

  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 10px",
            borderRadius: "3px",
            background: "var(--nick-accent)",
            color: "var(--nick-text)",
            fontSize: "0.9rem",
            textDecoration: "none",
          }}
        >
          {typeof l.icon === "string" ? (
            <span style={{ fontSize: "1.1rem" }}>{l.icon}</span>
          ) : (
            l.icon
          )}
          <span>{l.label}</span>
        </a>
      ))}
    </div>
  );
}
