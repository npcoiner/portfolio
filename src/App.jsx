import { useState } from "react";
import Header from "./components/Header";
import GalleryProjects from "./components/GalleryProjects";
import GalleryBlog from "./components/GalleryBlog";
import Footer from "./components/Footer";

function App() {
  const [view, setView] = useState("projects"); // "projects" | "blog"

  return (
    <div className="min-h-screen flex flex-col bg-primary">
      <Header currentView={view} setView={setView} />

      <main className="flex-grow">
        {view === "projects" ? <GalleryProjects /> : <GalleryBlog />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
