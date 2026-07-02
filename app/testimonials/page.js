import TestimonialCard from "../../components/TestimonialCard";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      position: "Homeowner",
      company: "Private Residence",
      rating: 5,
      content:
        "BuildRight transformed our outdated kitchen into a modern masterpiece. The attention to detail and quality of work exceeded our expectations. The team was professional, punctual, and kept us informed throughout the entire process.",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Robert Chen",
      position: "Business Owner",
      company: "TechStart Inc.",
      rating: 5,
      content:
        "We hired BuildRight to construct our new office building, and they delivered beyond our expectations. The project was completed on time and within budget. The quality of construction is outstanding, and our employees love the new space.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Amanda Rodriguez",
      position: "Restaurant Owner",
      company: "Casa Bella Restaurant",
      rating: 5,
      content:
        "The renovation of our restaurant was a complete success. BuildRight understood our vision and brought it to life perfectly. The project management was excellent, and the final result is exactly what we envisioned.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Michael Thompson",
      position: "Property Developer",
      company: "Thompson Development",
      rating: 5,
      content:
        "I've worked with many construction companies, but BuildRight stands out for their reliability and quality. They've completed multiple projects for us, and each one has been delivered on time with exceptional craftsmanship.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Sarah Williams",
      position: "Homeowner",
      company: "Private Residence",
      rating: 5,
      content:
        "Building our dream home with BuildRight was an amazing experience. From the initial design consultation to the final walkthrough, everything was handled professionally. The quality of work is outstanding, and we couldn't be happier.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "David Park",
      position: "Property Manager",
      company: "Park Properties",
      rating: 5,
      content:
        "BuildRight has been our go-to contractor for all our property maintenance and renovation needs. Their team is reliable, skilled, and always delivers quality work. I highly recommend them to anyone looking for construction services.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 text-black">
      <section className="bg-gradient-to-r from-pink-100 to-yellow-100 text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Testimonials</h1>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Hear from our satisfied clients and partners about their experience
            working with BuildRight Construction.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We take pride in building lasting relationships and delivering
              exceptional results for every client.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
