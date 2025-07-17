import { useState } from "react";
import Header from "./components/Header";
import GalleryProjects from "./components/GalleryProjects";
import GalleryBlog from "./components/GalleryBlog";
import Footer from "./components/Footer";
import useViewURLSync from "./hooks/useViewURLSync.js";

function App() {
  const [view, setView] = useState(null); // don't set default
  const [articleId, setArticleId] = useState(null);

  useViewURLSync({ currentView: view, setView, articleId, setArticleId });

  if (!view) return null; // or a loading spinner

  return (
    <div className="min-h-screen flex flex-col bg-primary">
      <Header currentView={view} setView={(v) => {
        setView(v);
        setArticleId(null);
      }} />
      <main className="flex-grow">
        {view === "projects" ? (
          <GalleryProjects articleId={articleId} setArticleId={setArticleId} />
        ) : (
          <GalleryBlog articleId={articleId} setArticleId={setArticleId} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
