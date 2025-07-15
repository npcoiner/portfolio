/* A simple media card that handles both image & video */
export default function ProjectCard({ title, description, mediaSrc, isVideo }) {
  return (
    <article className="rounded-lg overflow-hidden bg-[#212046] shadow-lg">
      {isVideo ? (
        <video
          src={mediaSrc}
          controls
          className="w-full h-60 object-cover bg-black"
        />
      ) : (
        <img
          src={mediaSrc}
          alt={title}
          className="w-full h-60 object-cover"
        />
      )}

      <div className="p-4 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm opacity-80">{description}</p>
      </div>
    </article>
  );
}

