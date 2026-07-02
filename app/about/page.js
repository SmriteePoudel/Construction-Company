export default function AboutPage() {
  return (
    <div className="min-h-screen bg-pink-50 text-black">
      <section className="py-20 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">
            About BuildRight Construction
          </h1>
          <p className="text-lg text-purple-300 mb-8">
            With over 25 years of experience, BuildRight Construction has been
            transforming dreams into reality for homeowners and businesses
            alike. Our commitment to quality, safety, and customer satisfaction
            sets us apart in the industry.
          </p>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Construction site"
            className="rounded-lg shadow-lg mx-auto mb-8 w-full max-w-2xl"
          />
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            To deliver exceptional construction services with integrity,
            innovation, and a focus on building lasting relationships with our
            clients and communities.
          </p>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-lg text-gray-700">
            Founded in 1995, BuildRight Construction started as a small family
            business and has grown into a leading construction company known for
            our craftsmanship and reliability. We believe every project is an
            opportunity to create something meaningful and lasting.
          </p>
        </div>
      </section>
    </div>
  );
}
