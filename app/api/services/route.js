import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in .env.local"
  );
}

let cached = global.mongooseServices;
if (!cached) {
  cached = global.mongooseServices = { conn: null, promise: null };
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

const ServiceSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    features: [String],
    image: String,
  },
  { timestamps: true }
);

const Service =
  mongoose.models.Service || mongoose.model("Service", ServiceSchema);

export async function GET() {
  await dbConnect();
  const services = await Service.find({}).sort({ createdAt: -1 });
  return Response.json(services);
}

export async function POST(request) {
  await dbConnect();
  const data = await request.json();
  const service = await Service.create(data);
  return Response.json({ success: true, service });
}
