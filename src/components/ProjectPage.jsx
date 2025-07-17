import { useParams } from "react-router-dom";
import projects from "../data/projectsData";
import ProjectArticle from "./ProjectArticle";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="p-8 text-center">404: Project not found</div>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "64px 16px" }}>
      <ProjectArticle project={project} />
    </div>
  );
}

