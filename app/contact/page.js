import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-pink-50 text-black">
      <section className="py-20 bg-gradient-to-r from-yellow-100 to-pink-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-purple-300 mb-8">
            Ready to start your project or have questions? Reach out to our team
            and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col md:flex-row gap-12 items-start justify-center">
            <div className="flex-1">
              <ContactForm />
            </div>
            <div className="flex-1 text-left mt-12 md:mt-0">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="mb-2">
                Phone:{" "}
                <a href="tel:+1234567890" className="text-pink-500">
                  (123) 456-7890
                </a>
              </p>
              <p className="mb-2">
                Email:{" "}
                <a href="mailto:info@buildright.com" className="text-pink-500">
                  info@buildright.com
                </a>
              </p>
              <p className="mb-2">Address: 123 Main St, Your City, Country</p>
              <img
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
                alt="Office"
                className="rounded-lg shadow-lg mt-6 w-full max-w-xs"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
