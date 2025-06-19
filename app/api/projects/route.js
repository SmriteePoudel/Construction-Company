import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in .env.local"
  );
}

let cached = global.mongooseProjects;
if (!cached) {
  cached = global.mongooseProjects = { conn: null, promise: null };
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

const ProjectSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    category: String,
    image: String,
    location: String,
    year: String,
  },
  { timestamps: true }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export async function GET() {
  await dbConnect();
  const projects = await Project.find({}).sort({ createdAt: -1 });
  return Response.json(projects);
}

export async function POST(request) {
  await dbConnect();
  const data = await request.json();
  const project = await Project.create(data);
  return Response.json({ success: true, project });
}
