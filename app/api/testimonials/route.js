import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in .env.local"
  );
}

let cached = global.mongooseTestimonials;
if (!cached) {
  cached = global.mongooseTestimonials = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
      })
      .then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

const TestimonialSchema = new mongoose.Schema(
  {
    name: String,
    position: String,
    company: String,
    rating: Number,
    content: String,
    image: String,
  },
  { timestamps: true }
);

const Testimonial =
  mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);

export async function GET() {
  await dbConnect();
  const testimonials = await Testimonial.find({}).sort({ createdAt: -1 });
  return Response.json(testimonials);
}

export async function POST(request) {
  await dbConnect();
  const data = await request.json();
  const testimonial = await Testimonial.create(data);
  return Response.json({ success: true, testimonial });
}
