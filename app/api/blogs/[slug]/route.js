import { NextResponse } from "next/server"

// In-memory storage for demo purposes
// In production, use MongoDB
const blogs = []

export async function GET(request, { params }) {
  try {
    const { slug } = params
    const blog = blogs.find((b) => b.slug === slug)

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 })
    }

    return NextResponse.json(blog)
  } catch (error) {
    return NextResponse.json({ message: "Error fetching blog" }, { status: 500 })
  }
}

export async function PUT(request, { params }) {
  try {
    const { slug } = params
    const data = await request.json()

    const blogIndex = blogs.findIndex((b) => b.slug === slug)
    if (blogIndex === -1) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 })
    }

    // Update blog
    blogs[blogIndex] = {
      ...blogs[blogIndex],
      ...data,
      updatedAt: new Date().toISOString(),
    }

    return NextResponse.json(blogs[blogIndex])
  } catch (error) {
    return NextResponse.json({ message: "Error updating blog" }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  try {
    const { slug } = params
    const blogIndex = blogs.findIndex((b) => b.slug === slug)

    if (blogIndex === -1) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 })
    }

    blogs.splice(blogIndex, 1)

    return NextResponse.json({ message: "Blog deleted successfully" })
  } catch (error) {
    return NextResponse.json({ message: "Error deleting blog" }, { status: 500 })
  }
}
