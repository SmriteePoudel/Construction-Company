export default function HeroSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-pink-100 to-purple-100 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Building Your <span className="text-pink-500">Dreams</span> Into
            Reality
          </h1>
          <p className="text-xl text-purple-300 mb-8 max-w-xl">
            Professional construction services for residential and commercial
            projects. Quality craftsmanship, expert team, and exceptional
            results since 1995.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-pink-200 hover:bg-pink-300 text-black rounded-lg font-semibold text-lg transition-colors duration-300"
          >
            Get a Free Quote
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
            alt="Construction site"
            className="w-96 h-96 object-cover rounded-xl shadow-2xl border-4 border-pink-200"
          />
        </div>
      </div>
    </section>
  );
}
