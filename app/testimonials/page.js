"use client";
import { useEffect, useState } from "react";
import TestimonialCard from "../../components/TestimonialCard";

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch("/api/testimonials");
        if (!res.ok) throw new Error("Failed to fetch testimonials");
        const data = await res.json();
        setTestimonials(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchTestimonials();
  }, []);

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "25+", label: "Years of Trust" },
    { number: "4.9", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-100 to-purple-100 text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients
            about their experience working with BuildRight Construction.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-yellow-300 mb-2 text-black">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-purple-600 max-w-3xl mx-auto">
              Real feedback from real clients who have experienced our
              commitment to quality, reliability, and exceptional service.
            </p>
          </div>

          {loading ? (
            <div className="text-center text-lg text-gray-500">
              Loading testimonials...
            </div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : testimonials.length === 0 ? (
            <div className="text-center text-gray-500">
              No testimonials found.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial._id || index}
                  testimonial={testimonial}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Clients Choose BuildRight
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and customer satisfaction sets us
              apart from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                On-Time Delivery
              </h3>
              <p className="text-gray-600">
                We understand the importance of deadlines and consistently
                deliver projects on time, keeping you informed throughout the
                process.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                Quality Guarantee
              </h3>
              <p className="text-gray-600">
                Every project is built to the highest standards with premium
                materials and expert craftsmanship that stands the test of time.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                Personal Service
              </h3>
              <p className="text-gray-600">
                We treat every client like family, providing personalized
                attention and maintaining open communication throughout your
                project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Happy Clients
          </h2>
          <p className="text-lg text-purple-300 mb-8 max-w-2xl mx-auto">
            Ready to experience the BuildRight difference? Contact us today to
            start your project and become part of our success story.
          </p>
          <a
            href="/contact"
            className="bg-pink-200 hover:bg-pink-300 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 inline-block"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}
