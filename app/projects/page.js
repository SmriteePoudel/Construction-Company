import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Modern Family Home",
      description:
        "A stunning 4-bedroom family home featuring open-concept living spaces, custom kitchen, and sustainable building materials.",
      category: "Residential",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
      location: "Suburban Area",
      year: "2024",
    },
    {
      title: "Downtown Office Complex",
      description:
        "A state-of-the-art office building with modern amenities, energy-efficient systems, and flexible workspace design.",
      category: "Commercial",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      location: "City Center",
      year: "2023",
    },
    {
      title: "Kitchen Renovation",
      description:
        "Complete kitchen transformation with custom cabinetry, quartz countertops, and modern appliances.",
      category: "Renovation",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
      location: "Residential District",
      year: "2024",
    },
    {
      title: "Luxury Condominiums",
      description:
        "High-end residential development featuring premium finishes, rooftop amenities, and smart home technology.",
      category: "Residential",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      location: "Waterfront",
      year: "2023",
    },
    {
      title: "Restaurant Renovation",
      description:
        "Complete interior and exterior renovation of a popular restaurant, creating a modern dining experience.",
      category: "Commercial",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      location: "Downtown",
      year: "2024",
    },
    {
      title: "Basement Finishing",
      description:
        "Transformation of unfinished basement into a functional family room, home office, and guest suite.",
      category: "Renovation",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      location: "Suburban Home",
      year: "2023",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 text-black">
      <section className="bg-gradient-to-r from-yellow-100 to-pink-100 text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Explore our portfolio of completed and ongoing construction
            projects, each a testament to our commitment to quality and
            innovation.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From residential homes to commercial spaces, our diverse portfolio
              showcases our expertise and attention to detail.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
