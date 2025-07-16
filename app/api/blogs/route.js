import { NextResponse } from "next/server"

// In-memory storage for demo purposes
// In production, use MongoDB
const blogs = []

export async function GET() {
  try {
    // Sort blogs by creation date (newest first)
    const sortedBlogs = blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    return NextResponse.json(sortedBlogs)
  } catch (error) {
    return NextResponse.json({ message: "Error fetching blogs" }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.title || !data.content || !data.metaDescription || !data.slug) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Check if slug already exists
    const existingBlog = blogs.find((blog) => blog.slug === data.slug)
    if (existingBlog) {
      return NextResponse.json({ message: "Slug already exists" }, { status: 400 })
    }

    const newBlog = {
      _id: Date.now().toString(),
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    blogs.push(newBlog)

    return NextResponse.json(newBlog, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: "Error creating blog" }, { status: 500 })
  }
}
