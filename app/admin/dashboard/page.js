"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { PlusCircle, FileText, Edit, Trash2, LogOut, Calendar, Eye } from "lucide-react"

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check authentication
    const isLoggedIn = localStorage.getItem("adminLoggedIn")
    if (isLoggedIn !== "true") {
      router.push("/admin")
      return
    }

    fetchBlogs()
  }, [router])

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blogs")
      if (response.ok) {
        const data = await response.json()
        setBlogs(data)
      }
    } catch (error) {
      console.error("Error fetching blogs:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn")
    router.push("/admin")
  }

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      try {
        const response = await fetch(`/api/blogs/${id}`, {
          method: "DELETE",
        })

        if (response.ok) {
          setBlogs(blogs.filter((blog) => blog._id !== id))
        } else {
          alert("Error deleting blog post")
        }
      } catch (error) {
        console.error("Error deleting blog:", error)
        alert("Error deleting blog post")
      }
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">ST Fitness Admin</h1>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Blog Posts</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{blogs.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Published This Month</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {
                  blogs.filter((blog) => {
                    const blogDate = new Date(blog.createdAt)
                    const currentDate = new Date()
                    return (
                      blogDate.getMonth() === currentDate.getMonth() &&
                      blogDate.getFullYear() === currentDate.getFullYear()
                    )
                  }).length
                }
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
              <PlusCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/admin/blog/new">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  New Blog Post
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Blog Management */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Blog Posts</CardTitle>
                <CardDescription>Manage your blog posts and content</CardDescription>
              </div>
              <Button asChild>
                <Link href="/admin/blog/new">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  New Post
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {blogs.length === 0 ? (
              <div className="text-center py-8">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">No blog posts yet</h3>
                <p className="text-gray-500 mb-4">Create your first blog post to get started</p>
                <Button asChild>
                  <Link href="/admin/blog/new">Create Blog Post</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {blogs.map((blog) => (
                  <div key={blog._id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{blog.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{blog.metaDescription}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>Created: {formatDate(blog.createdAt)}</span>
                        <span>Slug: /{blog.slug}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/blog/${blog.slug}`} target="_blank">
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/admin/blog/edit/${blog._id}`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(blog._id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
