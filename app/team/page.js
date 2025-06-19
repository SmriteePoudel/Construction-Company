"use client";
import { useEffect, useState } from "react";
import TeamMemberCard from "../../components/TeamMemberCard";

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const res = await fetch("/api/team");
        if (!res.ok) throw new Error("Failed to fetch team");
        const data = await res.json();
        setTeamMembers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchTeam();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-100 to-purple-100 text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Our experienced team of professionals is dedicated to bringing your
            vision to life with expertise, creativity, and unwavering commitment
            to quality.
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              The BuildRight Family
            </h2>
            <p className="text-lg text-purple-300 max-w-3xl mx-auto">
              Our team combines decades of experience with innovative thinking
              to deliver exceptional results on every project. We work together
              like family, ensuring seamless communication and collaboration
              throughout your project.
            </p>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2 text-black">
                50+
              </div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2 text-black">
                200+
              </div>
              <div className="text-gray-600">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2 text-black">
                15+
              </div>
              <div className="text-gray-600">Professional Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2 text-black">
                100%
              </div>
              <div className="text-gray-600">Safety Record</div>
            </div>
          </div>

          {/* Team Members Grid */}
          {loading ? (
            <div className="text-center text-lg text-gray-500">
              Loading team...
            </div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : teamMembers.length === 0 ? (
            <div className="text-center text-gray-500">
              No team members found.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={member._id || index} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Culture
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At BuildRight, we believe that great results come from great
                people working together. Our culture is built on mutual respect,
                continuous learning, and a shared passion for excellence.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We invest in our team's professional development, provide
                ongoing training, and create an environment where everyone can
                thrive and grow their skills.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-orange-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Continuous professional development
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-orange-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Safety-first work environment
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-orange-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Collaborative team approach
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-orange-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Innovation and creativity
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Work With Our Team
          </h2>
          <p className="text-lg text-purple-300 mb-8 max-w-2xl mx-auto">
            Ready to start your project? Our experienced team is here to help
            you bring your vision to life with expertise and dedication.
          </p>
          <a
            href="/contact"
            className="bg-pink-200 hover:bg-pink-300 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 inline-block"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}
