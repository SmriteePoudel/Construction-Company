import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-100 to-purple-100 text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Ready to start your project? Get in touch with us today for a free
            consultation and quote. We're here to help bring your vision to
            life.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-black">Get In Touch</h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Office Address
                    </h3>
                    <p className="text-purple-300">
                      123 Construction Avenue
                      <br />
                      Building District
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-purple-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Phone Number
                    </h3>
                    <p className="text-purple-300">
                      Main: (555) 123-4567
                      <br />
                      Fax: (555) 123-4568
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-purple-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Email Address
                    </h3>
                    <p className="text-purple-300">
                      General: info@buildright.com
                      <br />
                      Sales: sales@buildright.com
                      <br />
                      Support: support@buildright.com
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-purple-300"
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
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Business Hours
                    </h3>
                    <p className="text-purple-300">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-12 p-6 bg-pink-100 rounded-lg border border-pink-200">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Emergency Service
                </h3>
                <p className="text-purple-300 mb-4">
                  For urgent construction emergencies, call our 24/7 emergency
                  line:
                </p>
                <p className="text-xl font-bold text-yellow-300">
                  (555) 911-EMRG
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold white mb-4">Find Us</h2>
            <p className="text-lg text-purple-300">
              Visit our office or give us a call to discuss your project
              requirements.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 w-full bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-gray-500">Interactive Map Coming Soon</p>
                <p className="text-sm text-gray-400 mt-2">
                  We're working on integrating a map to show our location
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-purple-300 max-w-3xl mx-auto">
              Get answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  How long does a typical project take?
                </h3>
                <p className="text-purple-300">
                  Project timelines vary depending on scope and complexity. A
                  kitchen renovation might take 4-6 weeks, while a custom home
                  could take 6-12 months. We'll provide a detailed timeline
                  during consultation.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do you provide free estimates?
                </h3>
                <p className="text-purple-300">
                  Yes, we offer free consultations and estimates for all
                  projects. We'll visit your site, discuss your requirements,
                  and provide a detailed quote with no obligation.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What areas do you serve?
                </h3>
                <p className="text-purple-300">
                  We serve the greater metropolitan area and surrounding suburbs
                  within a 50-mile radius. Contact us to confirm if we cover
                  your specific location.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Are you licensed and insured?
                </h3>
                <p className="text-purple-300">
                  Absolutely. We are fully licensed, bonded, and insured. We
                  carry comprehensive liability insurance and workers'
                  compensation coverage for your protection.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do you handle permits and inspections?
                </h3>
                <p className="text-purple-300">
                  Yes, we handle all necessary permits, inspections, and
                  regulatory compliance. We'll ensure your project meets all
                  local building codes and requirements.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What payment terms do you offer?
                </h3>
                <p className="text-purple-300">
                  We offer flexible payment terms with progress payments
                  throughout the project. We accept cash, check, and major
                  credit cards. Financing options are also available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
