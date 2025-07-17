import { useEffect } from "react";

export default function useViewURLSync({ currentView, setView, articleId, setArticleId }) {
  // Set state on first mount + back/forward
  useEffect(() => {
    const syncFromURL = () => {
      const url = new URL(window.location.href);
      const viewParam = url.searchParams.get("view");
      const idParam = url.searchParams.get("id");

      if (viewParam === "projects" || viewParam === "blog") {
        setView(viewParam);
        setArticleId(idParam || null);
      } else {
        // only if missing or invalid
        setView("projects");
        setArticleId(null);
      }
    };

    window.addEventListener("popstate", syncFromURL);
    syncFromURL(); // ← THIS MUST RUN ONCE ON MOUNT

    return () => window.removeEventListener("popstate", syncFromURL);
  }, []);

  // Update the URL when state changes
  useEffect(() => {
  if (!currentView) return; // wait until initialized

  const url = new URL(window.location.href);
  url.searchParams.set("view", currentView);

  if (articleId) {
    url.searchParams.set("id", articleId);
  } else {
    url.searchParams.delete("id");
  }

  window.history.pushState({}, "", url);
}, [currentView, articleId]);}

