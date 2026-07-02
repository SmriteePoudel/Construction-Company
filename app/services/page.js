export default function ServicesPage() {
  const services = [
    {
      title: "Residential Construction",
      description:
        "Custom homes built to your exact specifications with premium materials and expert craftsmanship.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Commercial Construction",
      description:
        "Office buildings, retail spaces, and industrial facilities designed for functionality and modern aesthetics.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Renovation & Remodeling",
      description:
        "Transform your existing space with our expert renovation services, from kitchen remodels to full home makeovers.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Project Management",
      description:
        "Comprehensive project management ensuring your construction project stays on time, within budget, and exceeds expectations.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Interior Design",
      description:
        "Professional interior design services to create beautiful, functional spaces that reflect your style and meet your needs.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Maintenance Services",
      description:
        "Ongoing maintenance and repair services to keep your property in excellent condition and preserve its value.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 text-black">
      <section className="py-20 bg-gradient-to-r from-purple-100 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-pink-300 mb-8">
            Discover the wide range of construction services we offer, tailored
            to meet your unique needs and vision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center border border-pink-100 hover:shadow-lg transition"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h2 className="text-2xl font-bold text-pink-500 mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
