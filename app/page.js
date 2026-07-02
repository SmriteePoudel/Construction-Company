"use client";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-200">
      <section className="bg-purple-200 text-black">
        <HeroSection />
      </section>
      <section className="bg-pink-200 text-black">
        <ServicesSection />
      </section>
    </div>
  );
}
