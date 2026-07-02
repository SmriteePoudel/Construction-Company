export default function ServicesSection() {
  const services = [
    {
      title: "Residential Construction",
      description:
        "Custom homes built to your exact specifications with premium materials and expert craftsmanship.",
      icon: "🏠",
    },
    {
      title: "Commercial Construction",
      description:
        "Office buildings, retail spaces, and industrial facilities designed for functionality and modern aesthetics.",
      icon: "🏢",
    },
    {
      title: "Renovation & Remodeling",
      description:
        "Transform your existing space with our expert renovation services, from kitchen remodels to full home makeovers.",
      icon: "🔨",
    },
    {
      title: "Project Management",
      description:
        "Comprehensive project management ensuring your construction project stays on time, within budget, and exceeds expectations.",
      icon: "📋",
    },
    {
      title: "Interior Design",
      description:
        "Professional interior design services to create beautiful, functional spaces that reflect your style and meet your needs.",
      icon: "🛋️",
    },
    {
      title: "Maintenance Services",
      description:
        "Ongoing maintenance and repair services to keep your property in excellent condition and preserve its value.",
      icon: "🧰",
    },
  ];

  return (
    <section className="py-24 bg-yellow-50 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-purple-300 max-w-2xl mx-auto">
            Comprehensive construction services tailored to meet your specific
            needs. From concept to completion, we deliver excellence in every
            project.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center border border-pink-100 hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-pink-500">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
