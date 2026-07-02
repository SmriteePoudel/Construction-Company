import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur border-b border-pink-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <Link href="/">
            <span className="inline-flex items-center gap-2 font-bold text-xl text-pink-500">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="14"
                  width="8"
                  height="14"
                  rx="2"
                  fill="#f472b6"
                  stroke="#a21caf"
                  strokeWidth="1.5"
                />
                <rect x="5" y="18" width="2" height="4" rx="1" fill="#fff" />
                <rect
                  x="12"
                  y="8"
                  width="8"
                  height="20"
                  rx="2"
                  fill="#fef3c7"
                  stroke="#facc15"
                  strokeWidth="1.5"
                />
                <rect
                  x="15"
                  y="12"
                  width="2"
                  height="4"
                  rx="1"
                  fill="#fde68a"
                />
                <rect
                  x="15"
                  y="18"
                  width="2"
                  height="4"
                  rx="1"
                  fill="#fde68a"
                />
                <rect
                  x="22"
                  y="11"
                  width="8"
                  height="17"
                  rx="2"
                  fill="#c4b5fd"
                  stroke="#7c3aed"
                  strokeWidth="1.5"
                />
                <rect x="25" y="15" width="2" height="4" rx="1" fill="#fff" />
                <rect x="25" y="21" width="2" height="4" rx="1" fill="#fff" />
              </svg>
              BuildRight
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <Link
            href="/about"
            className="text-black hover:text-pink-500 font-medium transition"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-black hover:text-pink-500 font-medium transition"
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="text-black hover:text-pink-500 font-medium transition"
          >
            Projects
          </Link>
          <Link
            href="/team"
            className="text-black hover:text-pink-500 font-medium transition"
          >
            Team
          </Link>
          <Link
            href="/testimonials"
            className="text-black hover:text-pink-500 font-medium transition"
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="ml-4 px-4 py-2 bg-pink-200 hover:bg-pink-300 text-black rounded-lg font-semibold transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
