import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Award, Users, Target, Heart } from "lucide-react"

export const metadata = {
  title: "About ST Fitness - Gym Management Experts & Business Solutions",
  description:
    "Discover ST Fitness: a leading gym management company empowering fitness businesses through expert operations, member retention strategies, and scalable growth.",
  keywords:
    "about ST Fitness, gym management company, fitness business solutions, gym operations, member retention",
}

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-12 w-12 text-blue-600" />,
      title: "Operational Excellence",
      description: "Streamline processes, eliminate waste, and boost efficiency at every level of your fitness business.",
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Member Retention",
      description: "Implement effective strategies to keep your clients engaged, loyal, and thriving.",
    },
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: "Scalable Growth",
      description: "Unlock revenue potential and confidently scale your business with expert insights.",
    },
    {
      icon: <Heart className="h-12 w-12 text-blue-600" />,
      title: "Client-Centric Approach",
      description: "Your success is our success — we customize solutions to fit your unique goals.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 breadcrumb-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ST Fitness</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering gym owners and fitness brands with full-service management solutions tailored to scale, retain,
              and thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2025, ST Fitness began with a mission to bridge the gap between fitness passion and business
                performance. Our founder, an experienced fitness operator, saw countless gyms struggle not due to lack
                of effort — but lack of systems, strategy, and support.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a consultancy evolved into a full-scale management company, helping gym owners across
                the country increase retention, streamline operations, and unlock revenue growth — without burning out.
              </p>
              <p className="text-lg text-gray-600">
                Today, ST Fitness powers dozens of successful fitness businesses with a proven framework for operational
                excellence and member-first experiences.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-us.jpg-LXWP52ECKzm7oRafPksHYsJm90S8ps.jpeg"
                alt="Gym operations in action"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="text-center p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600 mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-600">
                  To help gyms grow stronger businesses by delivering expert operational support, cutting-edge
                  strategies, and a commitment to excellence that turns vision into results.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600 mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-600">
                  To be the most trusted gym management partner, known for elevating fitness businesses through systems,
                  service, and a results-driven approach.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">Guiding principles behind every partnership</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100">Real results we’ve achieved for fitness businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100K+</div>
              <div className="text-blue-100">Members Managed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-100">Gyms Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30%</div>
              <div className="text-blue-100">Avg. Retention Boost</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
