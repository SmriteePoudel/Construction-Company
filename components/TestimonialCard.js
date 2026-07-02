export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center border border-pink-100 hover:shadow-lg transition">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-20 h-20 object-cover rounded-full mb-4 border-4 border-yellow-200"
      />
      <div className="flex gap-1 mb-2">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-700 mb-4">“{testimonial.content}”</p>
      <h3 className="text-lg font-bold text-pink-500 mb-1">
        {testimonial.name}
      </h3>
      <p className="text-sm text-purple-300 font-semibold mb-1">
        {testimonial.position}
      </p>
      <p className="text-sm text-gray-500">{testimonial.company}</p>
    </div>
  );
}
