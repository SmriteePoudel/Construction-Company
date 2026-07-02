import TeamMemberCard from "../../components/TeamMemberCard";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "John Johnson",
      position: "CEO & Founder",
      bio: "With over 25 years of experience in construction, John leads our company with vision and expertise. He ensures every project meets our high standards of quality and craftsmanship.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      social: {
        linkedin: "#",
        email: "john@buildright.com",
      },
    },
    {
      name: "Sarah Johnson",
      position: "COO & Co-Founder",
      bio: "Sarah oversees all operations and ensures projects are completed on time and within budget. Her attention to detail and project management skills are unmatched.",
      image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
      social: {
        linkedin: "#",
        email: "sarah@buildright.com",
      },
    },
    {
      name: "Mike Rodriguez",
      position: "Lead Architect",
      bio: "Mike brings creative vision and technical expertise to every project. His innovative designs balance aesthetics with functionality and sustainability.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mike@buildright.com",
      },
    },
    {
      name: "Emily Chen",
      position: "Project Manager",
      bio: "Emily coordinates all aspects of project delivery, from initial planning to final completion. Her organizational skills keep projects running smoothly.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
      social: {
        linkedin: "#",
        email: "emily@buildright.com",
      },
    },
    {
      name: "David Thompson",
      position: "Site Supervisor",
      bio: "David ensures quality control and safety on every job site. His hands-on approach and attention to detail guarantee exceptional results.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      social: {
        linkedin: "#",
        email: "david@buildright.com",
      },
    },
    {
      name: "Lisa Park",
      position: "Interior Designer",
      bio: "Lisa creates beautiful, functional spaces that reflect each client's unique style and needs. Her design expertise transforms houses into homes.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@buildright.com",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 text-black">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The BuildRight Family
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team combines decades of experience with innovative thinking
              to deliver exceptional results on every project. We work together
              like family, ensuring seamless communication and collaboration
              throughout your project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
