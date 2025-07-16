import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Award, Users, Target, Heart } from "lucide-react"

export const metadata = {
  title: "About ST Fitness - Our Story, Mission & Expert Team",
  description:
    "Learn about ST Fitness journey, our mission to transform lives through fitness, and meet our team of certified trainers dedicated to your success.",
  keywords: "about ST Fitness, gym story, fitness mission, certified trainers, gym history",
}

export default function AboutPage() {
  const team = [
    {
      name: "John Smith",
      role: "Head Trainer & Founder",
      experience: "15+ years",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-2.jpg-PxmrArZxCYecv77wcFIbUPROyWiLKX.jpeg",
      bio: "Certified personal trainer with expertise in strength training and nutrition.",
    },
    {
      name: "Sarah Wilson",
      role: "Yoga & Pilates Instructor",
      experience: "10+ years",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-us.jpg-LXWP52ECKzm7oRafPksHYsJm90S8ps.jpeg",
      bio: "Specialized in mindfulness, flexibility, and core strengthening programs.",
    },
    {
      name: "Mike Johnson",
      role: "Cardio & HIIT Specialist",
      experience: "8+ years",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services-1.jpg-vs3ml9RCCuTK9igF84jm90q1OezIwK.jpeg",
      bio: "Expert in high-intensity training and cardiovascular fitness programs.",
    },
    {
      name: "Lisa Chen",
      role: "Nutrition Coach",
      experience: "12+ years",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services-2.jpg-5SyIxnp0ZWw000CPJ02qLeQBSQ1a7o.jpeg",
      bio: "Registered dietitian helping members achieve their goals through proper nutrition.",
    },
  ]

  const values = [
    {
      icon: <Target className="h-12 w-12 text-blue-600" />,
      title: "Goal-Oriented",
      description: "We help you set realistic goals and provide the roadmap to achieve them.",
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Community",
      description: "Building a supportive community where everyone motivates each other.",
    },
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: "Excellence",
      description: "Committed to providing the highest quality fitness experience.",
    },
    {
      icon: <Heart className="h-12 w-12 text-blue-600" />,
      title: "Wellness",
      description: "Focusing on overall health and well-being, not just physical fitness.",
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
              For over a decade, we've been dedicated to transforming lives through fitness, building a community of
              strong, healthy, and confident individuals.
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
                ST Fitness was founded in 2025 with a simple mission: to create a welcoming space where people of all
                fitness levels could come together to achieve their health and wellness goals. What started as a small
                neighborhood gym has grown into a premier fitness destination.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our founder, John Smith, was inspired by his own fitness journey and wanted to create a place that
                combined state-of-art equipment with personalized attention and a supportive community atmosphere.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to serve over 5,000 members and continue to be at the forefront of fitness
                innovation, always adapting to meet the evolving needs of our community.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-us.jpg-LXWP52ECKzm7oRafPksHYsJm90S8ps.jpeg"
                alt="ST Fitness gym interior"
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
                  To empower individuals to achieve their fitness goals through expert guidance, state-of-the-art
                  facilities, and a supportive community that celebrates every milestone on the journey to better
                  health.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600 mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-600">
                  To be the leading fitness destination that transforms lives, builds confidence, and creates a
                  healthier community where everyone feels welcome, supported, and motivated to reach their full
                  potential.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
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

      {/* Team Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Certified professionals dedicated to your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">{member.role}</CardDescription>
                  <CardDescription className="text-sm text-gray-500">{member.experience}</CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{member.bio}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Achievements Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-blue-100">Recognition and milestones that make us proud</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Expert Trainers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-blue-100">Lives Transformed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Member Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
