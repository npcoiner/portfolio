import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Three.js GLaDOS Bot",
    description: "Real‑time avatar driven by Discord voice.",
    mediaSrc: "/videos/glados-demo.mp4",
    isVideo: true,
  },
  {
    title: "Neural‑net Shader Demo",
    description: "WebGPU compute preview.",
    mediaSrc: "/images/Pasted.png",
    isVideo: false,
  },
];

export default function Gallery() {
  return (
    <section className="container mx-auto py-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </section>
  );
}
