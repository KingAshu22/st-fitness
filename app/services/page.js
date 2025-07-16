import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Dumbbell, Users, Heart, Zap, Target, Clock, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Fitness Services - Personal Training, Group Classes & More | ST Fitness",
  description:
    "Explore ST Fitness comprehensive services including personal training, group classes, nutrition coaching, and specialized programs designed for your success.",
  keywords: "personal training, group fitness classes, nutrition coaching, strength training, cardio, yoga, pilates",
}

export default function ServicesPage() {
  const services = [
    {
      title: "Personal Training",
      description: "One-on-one sessions with certified trainers tailored to your specific goals",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services-3.jpg-k6x2xdjDR8dNAAqVcWIQxnqakGIZek.jpeg",
      icon: <Target className="h-8 w-8 text-blue-600" />,
      features: ["Customized workout plans", "Nutrition guidance", "Progress tracking", "Flexible scheduling"],
      price: "",
    },
    {
      title: "Group Fitness Classes",
      description: "High-energy group workouts that motivate and challenge you",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services-2.jpg-5SyIxnp0ZWw000CPJ02qLeQBSQ1a7o.jpeg",
      icon: <Users className="h-8 w-8 text-blue-600" />,
      features: [
        "Variety of class types",
        "All fitness levels welcome",
        "Expert instructors",
        "Fun, social environment",
      ],
      price: "",
    },
    {
      title: "Strength Training",
      description: "Build muscle, increase power, and improve overall strength",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-2.jpg-PxmrArZxCYecv77wcFIbUPROyWiLKX.jpeg",
      icon: <Dumbbell className="h-8 w-8 text-blue-600" />,
      features: ["Free weights & machines", "Proper form instruction", "Progressive overload", "Injury prevention"],
      price: "",
    },
    {
      title: "Cardio Training",
      description: "Improve cardiovascular health and burn calories effectively",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services-1.jpg-vs3ml9RCCuTK9igF84jm90q1OezIwK.jpeg",
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      features: ["Treadmills & ellipticals", "Rowing machines", "Stationary bikes", "HIIT programs"],
      price: "",
    },
    {
      title: "Nutrition Coaching",
      description: "Personalized meal plans and nutrition guidance for optimal results",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services-4.jpg-BoZWGD6d4fVl3Gv9uQXX8XvD9FLUeb.jpeg",
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      features: ["Custom meal plans", "Macro tracking", "Supplement advice", "Regular check-ins"],
      price: "",
    },
    {
      title: "Yoga & Pilates",
      description: "Improve flexibility, balance, and mind-body connection",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-us.jpg-LXWP52ECKzm7oRafPksHYsJm90S8ps.jpeg",
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      features: ["Various yoga styles", "Pilates equipment", "Meditation sessions", "Stress relief"],
      price: "",
    },
  ]

  const classSchedule = [
    {
      time: "6:00 AM",
      monday: "HIIT",
      tuesday: "Yoga",
      wednesday: "Strength",
      thursday: "Cardio",
      friday: "HIIT",
      saturday: "Yoga",
    },
    {
      time: "7:00 AM",
      monday: "Yoga",
      tuesday: "Strength",
      wednesday: "HIIT",
      thursday: "Yoga",
      friday: "Strength",
      saturday: "Pilates",
    },
    {
      time: "9:00 AM",
      monday: "Pilates",
      tuesday: "HIIT",
      wednesday: "Yoga",
      thursday: "Strength",
      friday: "Cardio",
      saturday: "HIIT",
    },
    {
      time: "12:00 PM",
      monday: "Strength",
      tuesday: "Cardio",
      wednesday: "Pilates",
      thursday: "HIIT",
      friday: "Yoga",
      saturday: "Strength",
    },
    {
      time: "6:00 PM",
      monday: "HIIT",
      tuesday: "Yoga",
      wednesday: "Strength",
      thursday: "Pilates",
      friday: "HIIT",
      saturday: "Cardio",
    },
    {
      time: "7:00 PM",
      monday: "Yoga",
      tuesday: "Strength",
      wednesday: "HIIT",
      thursday: "Yoga",
      friday: "Pilates",
      saturday: "Yoga",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 breadcrumb-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive fitness solutions designed to help you achieve your goals, whether you're a beginner or an
              experienced athlete.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    {service.icon}
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-blue-600">{service.price}</span>
                    <Button asChild size="sm">
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Group Class Schedule</h2>
            <p className="text-xl text-gray-600">Join our energizing group fitness classes throughout the week</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Time</th>
                  <th className="px-4 py-3 text-center">Monday</th>
                  <th className="px-4 py-3 text-center">Tuesday</th>
                  <th className="px-4 py-3 text-center">Wednesday</th>
                  <th className="px-4 py-3 text-center">Thursday</th>
                  <th className="px-4 py-3 text-center">Friday</th>
                  <th className="px-4 py-3 text-center">Saturday</th>
                </tr>
              </thead>
              <tbody>
                {classSchedule.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold">{row.time}</td>
                    <td className="px-4 py-3 text-center">{row.monday}</td>
                    <td className="px-4 py-3 text-center">{row.tuesday}</td>
                    <td className="px-4 py-3 text-center">{row.wednesday}</td>
                    <td className="px-4 py-3 text-center">{row.thursday}</td>
                    <td className="px-4 py-3 text-center">{row.friday}</td>
                    <td className="px-4 py-3 text-center">{row.saturday}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section> */}

      {/* Membership Plans */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Membership Plans</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your lifestyle and goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Basic</CardTitle>
                <div className="text-4xl font-bold text-gray-900">
                  $29<span className="text-lg text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Gym access during business hours</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Basic equipment access</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Locker room access</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Choose Plan</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-blue-500 border-2">
              <CardHeader>
                <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm mb-2 inline-block">
                  Most Popular
                </div>
                <CardTitle className="text-2xl text-blue-600">Premium</CardTitle>
                <div className="text-4xl font-bold text-gray-900">
                  $59<span className="text-lg text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>24/7 gym access</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>All equipment access</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Group classes included</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Guest passes (2/month)</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Choose Plan</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Elite</CardTitle>
                <div className="text-4xl font-bold text-gray-900">
                  $99<span className="text-lg text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Everything in Premium</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>2 personal training sessions</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Nutrition consultation</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Priority booking</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Choose Plan</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Choose your service and begin your transformation journey today. Our expert team is here to support you
            every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">Book Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
