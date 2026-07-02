import { NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!mongoose.connection.readyState) {
  mongoose.connect(MONGODB_URI, { dbName: "workspace" });
}

const pageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
  },
  { timestamps: true }
);

const Page = mongoose.models.Page || mongoose.model("Page", pageSchema);

export async function GET() {
  const pages = await Page.find().sort({ createdAt: 1 });
  return NextResponse.json(pages);
}

export async function POST(req) {
  const { title } = await req.json();
  const page = await Page.create({ title });
  return NextResponse.json(page);
}

export async function PATCH(req) {
  const { id, title } = await req.json();
  const page = await Page.findByIdAndUpdate(id, { title }, { new: true });
  return NextResponse.json(page);
}

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  await Page.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
