export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-pink-100 hover:shadow-lg transition flex flex-col">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-pink-500 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700 mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-2">
          <span className="bg-pink-100 px-2 py-1 rounded">
            {project.category}
          </span>
          <span className="bg-yellow-100 px-2 py-1 rounded">
            {project.location}
          </span>
          <span className="bg-purple-100 px-2 py-1 rounded">
            {project.year}
          </span>
        </div>
      </div>
    </div>
  );
}
