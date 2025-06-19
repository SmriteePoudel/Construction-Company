"use client";
import { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-purple-300 max-w-3xl mx-auto">
              From residential homes to commercial spaces, our diverse portfolio
              showcases our expertise and attention to detail.
            </p>
          </div>
          {loading ? (
            <div className="text-center text-lg text-purple-300">
              Loading projects...
            </div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : projects.length === 0 ? (
            <div className="text-center text-gray-500">No projects found.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project._id || index} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with the same
            quality and attention to detail shown in our portfolio.
          </p>
          <a
            href="/contact"
            className="bg-pink-200 hover:bg-pink-300 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 inline-block"
          >
            Get Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
