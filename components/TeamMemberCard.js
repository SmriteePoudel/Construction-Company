export default function TeamMemberCard({ member }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center border border-pink-100 hover:shadow-lg transition">
      <img
        src={member.image}
        alt={member.name}
        className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-pink-200"
      />
      <h3 className="text-xl font-bold text-pink-500 mb-1">{member.name}</h3>
      <p className="text-sm text-purple-300 mb-2 font-semibold">
        {member.position}
      </p>
      <p className="text-gray-700 mb-4">{member.bio}</p>
      <div className="flex gap-4">
        {member.social?.linkedin && (
          <a
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
            </svg>
          </a>
        )}
        {member.social?.twitter && (
          <a
            href={member.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z" />
            </svg>
          </a>
        )}
        {member.social?.email && (
          <a
            href={`mailto:${member.social.email}`}
            className="text-pink-500 hover:text-pink-700"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 13.065l-11.99-7.065v14h24v-14l-12.01 7.065zm11.99-9.065h-23.98l11.99 7.065 11.99-7.065z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
