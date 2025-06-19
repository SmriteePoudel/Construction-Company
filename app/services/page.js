"use client";
import { useEffect, useState } from "react";
import ServicesSection from "../../components/ServicesSection";

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch("/api/services");
        if (!res.ok) throw new Error("Failed to fetch services");
        const data = await res.json();
        setServices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchServices();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-100 to-yellow-100 text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-pink-300 max-w-3xl mx-auto">
            Discover the wide range of construction services we offer, tailored
            to meet your unique needs and vision.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              What We Offer
            </h2>
            <p className="text-lg text-purple-300 max-w-3xl mx-auto">
              From design and planning to construction and finishing touches,
              our team delivers excellence at every stage.
            </p>
          </div>
          {loading ? (
            <div className="text-center text-lg text-gray-500">
              Loading services...
            </div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : services.length === 0 ? (
            <div className="text-center text-gray-500">No services found.</div>
          ) : (
            <ServicesSection services={services} />
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a free
            consultation from our experienced team.
          </p>
          <a
            href="/contact"
            className="bg-pink-200 hover:bg-pink-300 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 inline-block"
          >
            Get Free Quote
          </a>
        </div>
      </section>
    </div>
  );
}
