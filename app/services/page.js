import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  Settings,
  BarChart2,
  TrendingUp,
  Briefcase,
  Target,
  Users,
  PieChart,
  CheckCircle,
} from "lucide-react"

export const metadata = {
  title: "Gym Management Services - Operations, Retention & Revenue | ST Fitness Management",
  description:
    "ST Fitness Management provides top-tier gym management services including operational excellence, revenue growth, member retention strategies, sales & marketing, financial services, and more.",
  keywords:
    "gym management, fitness business operations, member retention, sales and marketing for gyms, fitness club consulting, gym revenue strategies",
}

export default function ServicesPage() {
  const services = [
    {
      emoji: "⚙️",
      title: "Operational Excellence",
      description: "Streamline your gym operations with our expert guidance and proven systems.",
      icon: <Settings className="h-8 w-8 text-blue-600" />,
      features: ["Staff training & SOPs", "Operational audits", "Tech integration", "KPI monitoring"],
    },
    {
      emoji: "🙌",
      title: "Member Retention Strategy",
      description: "Boost your member loyalty with targeted engagement strategies.",
      icon: <Users className="h-8 w-8 text-blue-600" />,
      features: ["CRM setup", "Loyalty programs", "Onboarding systems", "Retention analytics"],
    },
    {
      emoji: "💰",
      title: "Revenue Optimization",
      description: "Maximize your gym's revenue potential through smart strategies.",
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      features: ["Upsell programs", "Pricing strategy", "Member lifetime value", "Lead conversion improvement"],
    },
    {
      emoji: "🏢",
      title: "Club Management",
      description: "Full-service club management tailored for consistent growth and brand excellence.",
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      features: ["Franchise systems", "Daily operations", "Brand compliance", "Leadership support"],
    },
    {
      emoji: "📢",
      title: "Sales & Marketing",
      description: "Drive new memberships and brand awareness with high-performance marketing.",
      icon: <Target className="h-8 w-8 text-blue-600" />,
      features: ["Campaign planning", "Sales training", "Digital marketing", "Lead generation"],
    },
    {
      emoji: "📊",
      title: "Financial Services",
      description: "Stay on top of your gym's finances with dedicated management and insights.",
      icon: <BarChart2 className="h-8 w-8 text-blue-600" />,
      features: ["Budget planning", "Payroll & billing", "Cash flow analysis", "Monthly reports"],
    },
    {
      emoji: "📈",
      title: "Performance Analytics",
      description: "Make data-driven decisions with real-time gym performance dashboards.",
      icon: <PieChart className="h-8 w-8 text-blue-600" />,
      features: ["KPI visualization", "Member behavior tracking", "Trainer performance", "Data dashboards"],
    },
  ]

  const testimonials = [
    {
      name: "Emily R.",
      quote:
        "ST Fitness transformed our gym's operations completely. Member satisfaction is at an all-time high!",
      role: "Owner, FitZone Club",
    },
    {
      name: "Jason T.",
      quote:
        "Their retention strategies helped us reduce churn by over 30% in 6 months. Highly recommend!",
      role: "Director, Pulse Fitness",
    },
    {
      name: "Alicia M.",
      quote:
        "From finance to marketing, their team has helped streamline everything. It’s like having a COO on demand.",
      role: "Founder, Urban Athletics",
    },
  ]

  const caseStudies = [
    {
      title: "Case Study: Pulse Fitness Turnaround",
      summary: "How ST Fitness helped Pulse Fitness recover post-pandemic with automation, training, and sales funnels.",
      link: "/case-studies/pulse-fitness",
    },
    {
      title: "Case Study: Urban Athletics Growth",
      summary: "Tripling revenue in under a year through pricing strategy and local SEO marketing.",
      link: "/case-studies/urban-athletics",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-16 breadcrumb-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gym Management Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Partner with ST Fitness Management for full-spectrum support—from operations and revenue to marketing and analytics.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-3xl">{service.emoji}</span>
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
                  <div className="flex justify-end">
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

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
                <p className="font-semibold text-blue-600">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {/* <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {caseStudies.map((cs, i) => (
              <div key={i} className="bg-white p-6 border rounded-lg shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">{cs.title}</h3>
                <p className="text-gray-600 mb-4">{cs.summary}</p>
                <Link href={cs.link} className="text-blue-600 font-medium hover:underline">
                  Read Full Case Study →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with Industry Experts</h2>
          <p className="text-xl mb-8 text-blue-100">
            Book a consultation to explore how we can help scale and systemize your gym business effectively.
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
