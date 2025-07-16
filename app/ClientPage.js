"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Dumbbell, Users, Clock, Award, Star } from "lucide-react"

export default function ClientPage() {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  const texts = [
    "UNLEASH YOUR POTENTIAL",
    "TRANSFORM YOUR BODY",
    "BUILD YOUR STRENGTH",
    "ACHIEVE YOUR GOALS",
    "BECOME UNSTOPPABLE",
  ]

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[textIndex]

        if (!isDeleting) {
          setCurrentText(current.substring(0, currentIndex + 1))
          setCurrentIndex((prev) => prev + 1)

          if (currentIndex + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setCurrentText(current.substring(0, currentIndex - 1))
          setCurrentIndex((prev) => prev - 1)

          if (currentIndex === 0) {
            setIsDeleting(false)
            setTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentIndex, isDeleting, textIndex, texts])

  // ... rest of the component data (features, services, testimonials) stays the same
  const features = [
    {
      icon: <Dumbbell className="h-12 w-12 text-blue-600" />,
      title: "Modern Equipment",
      description: "State-of-the-art fitness equipment from leading brands to maximize your workout efficiency.",
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Expert Trainers",
      description: "Certified personal trainers with years of experience to guide you on your fitness journey.",
    },
    {
      icon: <Clock className="h-12 w-12 text-blue-600" />,
      title: "Dedicated Time Slots",
      description: "Work out on your schedule with round-the-clock gym access for premium members.",
    },
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: "Proven Results",
      description: "Join thousands of satisfied members who have achieved their fitness goals with us.",
    },
  ]

  const services = [
    {
      title: "Personal Training",
      description: "One-on-one sessions with certified trainers",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services-3.jpg-k6x2xdjDR8dNAAqVcWIQxnqakGIZek.jpeg",
    },
    {
      title: "Group Classes",
      description: "High-energy group workouts for all fitness levels",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services-2.jpg-5SyIxnp0ZWw000CPJ02qLeQBSQ1a7o.jpeg",
    },
    {
      title: "Nutrition Coaching",
      description: "Personalized meal plans and nutrition guidance",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services-4.jpg-BoZWGD6d4fVl3Gv9uQXX8XvD9FLUeb.jpeg",
    },
  ]

  const testimonials = [
    {
      name: "Vivek Tiwari",
      text: "ST Fitness transformed my life! Lost 30 KG and gained incredible strength.",
      rating: 5,
    },
    {
      name: "Anamika Sharma",
      text: "The trainers are amazing and the equipment is top-notch. Highly recommend!",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      text: "Best gym experience ever. The community here is so supportive and motivating.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Video Background */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Video Background */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="/hero.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

  {/* Hero Content */}
  <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
    <div className="mb-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
        <span className="block text-white mb-2">IT'S TIME TO</span>
        <span className="block text-yellow-400 typewriter-text">
          {currentText}
          <span className="animate-pulse">|</span>
        </span>
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto font-light">
        Push your limits. Break your barriers. Transform your life at ST Fitness - where champions are made.
      </p>
    </div>

    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <Button
        asChild
        size="lg"
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl"
      >
        <Link href="/contact">START YOUR JOURNEY</Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="lg"
        className="border-2 border-white text-white hover:bg-white hover:text-black bg-transparent font-bold text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300"
      >
        <Link href="/services">EXPLORE PROGRAMS</Link>
      </Button>
    </div>

    {/* Scroll indicator */}
    <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </div>
</section>


      {/* Rest of the sections remain the same */}
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose ST Fitness?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide everything you need to achieve your fitness goals in a supportive, motivating environment with
              world-class facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive fitness solutions tailored to your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-blue-100">Happy Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Expert Trainers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Member Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
            <p className="text-xl text-gray-600">Real stories from real people who transformed their lives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-lg italic">"{testimonial.text}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Join thousands of members who have already transformed their lives. Your journey to a healthier, stronger
            you starts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Join Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
