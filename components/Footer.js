import Link from "next/link";

const socials = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    svg: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="6" fill="#f472b6" />
        <path
          d="M7.5 9.5v5h2v-5h-2zm1-1.5a1 1 0 110-2 1 1 0 010 2zm3 1.5v5h2v-2.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V15h2v-2.5c0-1.7-1.3-3-3-3s-3 1.3-3 3z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    svg: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="6" fill="#fef3c7" />
        <path
          d="M15 8h-2a1 1 0 00-1 1v2h3l-.5 2H12v6h-2v-6H8v-2h2V9a3 3 0 013-3h2v2z"
          fill="#f59e42"
        />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    svg: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="6" fill="#c4b5fd" />
        <path
          d="M19 7.5a6.5 6.5 0 01-1.89.52A3.28 3.28 0 0018.5 6a6.56 6.56 0 01-2.08.8A3.28 3.28 0 0012 9.5c0 .26.03.52.08.76A9.32 9.32 0 015 7.5s-4 9 5 12c6.5 0 10-5.5 10-10.25 0-.16 0-.32-.01-.48A7.18 7.18 0 0021 6.5a6.5 6.5 0 01-2 .55z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    svg: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="6" fill="#f472b6" />
        <rect x="7" y="7" width="10" height="10" rx="5" fill="#fff" />
        <circle cx="12" cy="12" r="3" fill="#f472b6" />
        <circle cx="16" cy="8" r="1" fill="#f472b6" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-100 via-yellow-50 to-purple-100 border-t border-pink-200 text-black py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-4">
        <span className="inline-flex items-center gap-2 font-bold text-lg text-pink-500">
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
            <rect x="15" y="12" width="2" height="4" rx="1" fill="#fde68a" />
            <rect x="15" y="18" width="2" height="4" rx="1" fill="#fde68a" />
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
          BuildRight Construction
        </span>
        <span className="text-sm text-purple-400 font-medium">
          Building your dreams into reality
        </span>
        <div className="flex gap-4 mt-2">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="hover:scale-110 transition-transform"
            >
              {social.svg}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-pink-200 mt-8 pt-6 text-center text-sm text-gray-500 transition hover:text-pink-500 cursor-pointer">
        &copy; {new Date().getFullYear()} BuildRight Construction. All rights
        reserved.
      </div>
    </footer>
  );
}
