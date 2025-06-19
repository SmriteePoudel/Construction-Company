import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in .env.local"
  );
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
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

const TeamMemberSchema = new mongoose.Schema(
  {
    name: String,
    position: String,
    bio: String,
    image: String,
    social: {
      linkedin: String,
      twitter: String,
      email: String,
    },
  },
  { timestamps: true }
);

const TeamMember =
  mongoose.models.TeamMember || mongoose.model("TeamMember", TeamMemberSchema);

export async function GET() {
  await dbConnect();
  const members = await TeamMember.find({}).sort({ createdAt: -1 });
  return Response.json(members);
}

export async function POST(request) {
  await dbConnect();
  const data = await request.json();
  const member = await TeamMember.create(data);
  return Response.json({ success: true, member });
}
