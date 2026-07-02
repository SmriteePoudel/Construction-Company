import { NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!mongoose.connection.readyState) {
  mongoose.connect(MONGODB_URI, { dbName: "workspace" });
}

const blockSchema = new mongoose.Schema(
  {
    pageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Page",
      required: true,
    },
    type: {
      type: String,
      enum: ["text", "heading", "todo", "bullet"],
      required: true,
    },
    content: { type: String, required: true },
    order: { type: Number, required: true },
  },
  { timestamps: true }
);

const Block = mongoose.models.Block || mongoose.model("Block", blockSchema);

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const pageId = searchParams.get("pageId");
  const blocks = await Block.find({ pageId }).sort({ order: 1 });
  return NextResponse.json(blocks);
}

export async function POST(req) {
  const { pageId, type, content, order } = await req.json();
  const block = await Block.create({ pageId, type, content, order });
  return NextResponse.json(block);
}

export async function PATCH(req) {
  const { id, type, content, order } = await req.json();
  const block = await Block.findByIdAndUpdate(
    id,
    { type, content, order },
    { new: true }
  );
  return NextResponse.json(block);
}

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  await Block.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
