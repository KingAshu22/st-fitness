"use client"

import Link from "next/link"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, Info } from "lucide-react"

export default function BMICalculatorPage() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [unit, setUnit] = useState("metric") // metric or imperial
  const [bmi, setBMI] = useState(null)
  const [category, setCategory] = useState("")

  const calculateBMI = () => {
    if (!weight || !height) return

    let bmiValue
    if (unit === "metric") {
      // BMI = weight (kg) / height (m)²
      const heightInMeters = Number.parseFloat(height) / 100
      bmiValue = Number.parseFloat(weight) / (heightInMeters * heightInMeters)
    } else {
      // BMI = (weight (lbs) / height (inches)²) × 703
      bmiValue = (Number.parseFloat(weight) / (Number.parseFloat(height) * Number.parseFloat(height))) * 703
    }

    setBMI(bmiValue.toFixed(1))

    // Determine category
    if (bmiValue < 18.5) {
      setCategory("Underweight")
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setCategory("Normal weight")
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setCategory("Overweight")
    } else {
      setCategory("Obese")
    }
  }

  const getBMIColor = () => {
    if (!bmi) return "text-gray-600"
    const bmiValue = Number.parseFloat(bmi)
    if (bmiValue < 18.5) return "text-blue-600"
    if (bmiValue < 25) return "text-green-600"
    if (bmiValue < 30) return "text-yellow-600"
    return "text-red-600"
  }

  const bmiRanges = [
    { range: "Below 18.5", category: "Underweight", color: "bg-blue-100 text-blue-800" },
    { range: "18.5 - 24.9", category: "Normal weight", color: "bg-green-100 text-green-800" },
    { range: "25.0 - 29.9", category: "Overweight", color: "bg-yellow-100 text-yellow-800" },
    { range: "30.0 and above", category: "Obese", color: "bg-red-100 text-red-800" },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 breadcrumb-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <Calculator className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">BMI Calculator</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Calculate your Body Mass Index (BMI) to understand your weight status and take the first step towards a
              healthier lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Calculate Your BMI</CardTitle>
                <CardDescription className="text-center">
                  Enter your measurements to get your BMI result
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Unit Selection */}
                <div className="flex justify-center space-x-4">
                  <Button variant={unit === "metric" ? "default" : "outline"} onClick={() => setUnit("metric")}>
                    Metric (kg/cm)
                  </Button>
                  <Button variant={unit === "imperial" ? "default" : "outline"} onClick={() => setUnit("imperial")}>
                    Imperial (lbs/in)
                  </Button>
                </div>

                {/* Weight Input */}
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight {unit === "metric" ? "(kg)" : "(lbs)"}</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder={unit === "metric" ? "Enter weight in kg" : "Enter weight in lbs"}
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>

                {/* Height Input */}
                <div className="space-y-2">
                  <Label htmlFor="height">Height {unit === "metric" ? "(cm)" : "(inches)"}</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder={unit === "metric" ? "Enter height in cm" : "Enter height in inches"}
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </div>

                <Button onClick={calculateBMI} className="w-full" size="lg">
                  Calculate BMI
                </Button>

                {/* Result */}
                {bmi && (
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className={`text-4xl font-bold mb-2 ${getBMIColor()}`}>{bmi}</div>
                    <div className="text-lg text-gray-600 mb-2">Your BMI</div>
                    <div className={`text-xl font-semibold ${getBMIColor()}`}>{category}</div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* BMI Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Info className="h-5 w-5" />
                    <span>BMI Categories</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {bmiRanges.map((range, index) => (
                      <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-gray-50">
                        <span className="font-medium">{range.range}</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${range.color}`}>
                          {range.category}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What is BMI?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Body Mass Index (BMI) is a simple calculation using a person's height and weight. The formula is BMI
                    = kg/m² where kg is a person's weight in kilograms and m² is their height in metres squared.
                  </p>
                  <p className="text-gray-600">
                    BMI is a useful measure of overweight and obesity. It is calculated the same way for both adults and
                    children. However, it is interpreted differently for children and teens, even though it is
                    calculated using the same formula.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Important Note</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    BMI is a screening tool and is not intended to diagnose disease or illness. It does not take into
                    account muscle mass, bone density, overall body composition, and racial and sex differences. Please
                    consult with a healthcare professional for a comprehensive health assessment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Action?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Now that you know your BMI, let our expert trainers help you create a personalized fitness plan to achieve
            your health goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">Get Personal Training</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
